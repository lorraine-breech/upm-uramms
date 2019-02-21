const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const async = require('async');

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/upm-uramms', { useNewUrlParser: true }, (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling~
let response = {
    status: 200,
    data: [],
    message: null
};
router.post('/login', (req, res) => {
    connection((db) => {
        const myDB = db.db('upm-uramms');
        myDB.collection('users')
            .findOne({
                user_username: req.body.user_username,
                user_password: req.body.user_password
            })
            .then((user) => {
                if (user) {
                    user.user_password = '';
                    response.data = user;
                    res.json(user);

                } else {

                    res.json(false);
                }
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/psrequests', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('psrequests')
                .find(ObjectID(req.query.id))
                .toArray()
                .then((psrequests) => {
                    if (psrequests) {
                        response.data = psrequests[0];
                        res.json(psrequests[0]);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    else{
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('psrequests')
                .find()
                .toArray()
                .then((psrequests) => {
                    if (psrequests) {
                        response.data = psrequests;
                        res.json(psrequests);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    
});


router.get('/parequests', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('parequests')
                .find(ObjectID(req.query.id))
                .toArray()
                .then((parequests) => {
                    if (parequests) {
                        response.data = parequests[0];
                        res.json(parequests[0]);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    else{
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('parequests')
                .find()
                .toArray()
                .then((parequests) => {
                    if (parequests) {
                        response.data = parequests;
                        res.json(parequests);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    
});


router.get('/cprequests', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('cprequests')
                .find(ObjectID(req.query.id))
                .toArray()
                .then((cprequests) => {
                    if (cprequests) {
                        response.data = cprequests[0];
                        res.json(cprequests[0]);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    else{
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('cprequests')
                .find()
                .toArray()
                .then((cprequests) => {
                    if (cprequests) {
                        response.data = cprequests;
                        res.json(cprequests);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    
});

router.delete('/studentusers', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.body._id);
        var deleteStudent = req.body;
        console.log(req.body._id);

        myDB.collection('studentusers')
        .deleteOne(
            {_id: id},
            function (err, results){
                if (err){
                    response.message = err;
                    throw err;
                }
                console.log("1 document deleted");
                db.close();
            }
        );
    })
});

router.put('/professors', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        var updatedProfessor = req.body;
        console.log(req.body._id);
        myDB.collection('professors')
        .updateOne(
            {_id: ObjectID(updatedProfessor._id)},
            { $set: 
                {
                    fname: updatedProfessor.fname,
                    mname: updatedProfessor.mname,
                    lname: updatedProfessor.lname,
                    emp_num: updatedProfessor.emp_num,
                    position: updatedProfessor.position,
                    title: updatedProfessor.title,
                    dept: updatedProfessor.dept,
                    college: updatedProfessor.college
                }
            },
            function (err, professor) {
                if (err){
                    response.message = err;
                    throw err;
                } 

                response.data = professor;
                res.json(professor);
            }
        );
    })
});

router.put('/studentusers', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        var updatedStudent = req.body;

        myDB.collection('studentusers')
        .updateOne(
            {_id: ObjectID(updatedStudent._id)},
            { $set: 
                {
                    fname: updatedStudent.fname,
                    mname: updatedStudent.mname,
                    lname: updatedStudent.lname,
                    stud_num: updatedStudent.stud_num,
                    year: updatedStudent.year,
                    course: updatedStudent.course,
                    dept: updatedStudent.dept,
                    college: updatedStudent.college,
                    panel: updatedStudent.panel,
                    adviser: updatedStudent.adviser
                }
            },
            function (err, student) {
                if (err){
                    response.message = err;
                    throw err;
                } 

                response.data = student;
                res.json(student);
            }
        );
    })
});
router.post('/createSuperUser', (req, res) => {
    connection((db) =>{
        var newSuperUserObj = {
            fname: req.body.fname,
            mname: req.body.mname,
            lname: req.body.lname,
            emp_num: req.body.emp_num,
            position: req.body.position,
            title: req.body.title,
            dept: req.body.dept,
            college: req.body.college
        }
        var newUserObj = {
            user_type: req.body.user_type,
            user_type_id: "",
            user_username: req.body.user_username,
            user_password: req.body.user_password
        };

        async.waterfall([
            insertSuperUser,
            insertUser
        ], function (err, results) {
            if (err) {
                response.message = err;
                throw err;
            }
            response.data = newUserObj;
            res.json(results);
        });
        
        
        function insertSuperUser(callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('superusers')
                .insertOne((newSuperUserObj), function (err, result){
                    if(err){
                        response.message = err;
                        throw err;
                    }
                    response.data = newSuperUserObj;
                    newUserObj.user_type_id = result.insertedId + '';
                    callback(null, newUserObj);
                });
        };

        function insertUser(userObj, callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('users')
                .insertOne((userObj), function (err, result) {
                    if (err) {
                        response.message = err;
                        throw err;
                    }
                    response.data = result;
                    callback(null, result);
                });
        };
    });
});

router.post('/createPanelMemberUser', (req, res) => {
    connection((db) =>{
        var newPanelMemberUserObj = {
            pm_prof_id: req.body.pm_prof_id,
            pm_advisee_id: null,
            pm_coadvisee_id: null,
            pm_panelee_id: null,
            pm_calendar_id: null,
        }

        async.waterfall([
            insertPanelMemberUser,
            updateProfessorUser
        ], function (err, results) {
            if (err) {
                response.message = err;
                throw err;
            }
            response.data = newPanelMemberUserObj;
            res.json(results);
        });

        function insertPanelMemberUser(callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('panelmemberusers')
            .insertOne((newPanelMemberUserObj), function (err, result){
                if(err){
                    response.message = err;
                    throw err;
                }
                response.data = newPanelMemberUserObj;
                callback(null, newPanelMemberUserObj);
            });
            

        };

        function updateProfessorUser(panelMemberUserObj, callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('professors')
            .updateOne(
                {_id: ObjectID(req.body.pm_prof_id)},
                { $set: {is_pm_user: panelMemberUserObj._id}},
                function (err, professor) {
                    if (err){
                        response.message = err;
                        throw err;
                    } 

                    response.data = professor;
                    callback(null, panelMemberUserObj);
                }
            );
        }
    });
});

router.post('/createOtherUser', (req, res) => {
    connection((db) =>{
        var newOtherUserObj = {
            other_prof_id: req.body.other_prof_id,
            other_type: req.body.other_type,
            other_is_panel_member: req.body.other_is_panel_member,
        }

        async.waterfall([
            insertOtherUser,
            updateProfessorUser
        ], function (err, results) {
            if (err) {
                response.message = err;
                throw err;
            }
            response.data = newOtherUserObj;
            res.json(results);
        });

        function insertOtherUser(callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('otherusers')
                .insertOne((newOtherUserObj), function (err, result){
                    if(err){
                        response.message = err;
                        throw err;
                    }
                    response.data = newOtherUserObj;
                    callback(null, newOtherUserObj);
                });
        }
        function updateProfessorUser(otherUserObj, callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('professors')
            .updateOne(
                {_id: ObjectID(req.body.other_prof_id)},
                { $set: 
                    {
                        is_other_user: otherUserObj._id, 
                        other_user_type: otherUserObj.other_type
                    } 
                },
                function (err, professor) {
                    if (err){
                        response.message = err;
                        throw err;
                    } 

                    response.data = professor;
                    callback(null, otherUserObj);
                }
            );
        }
    });
});

router.post('/createSuperUser', (req, res) => {
    connection((db) =>{
        var newSuperUserObj = {
            fname: req.body.fname,
            mname: req.body.mname,
            lname: req.body.lname,
            emp_num: req.body.emp_num,
            position: req.body.position,
            title: req.body.title,
            dept: req.body.dept,
            college: req.body.college
        }
        var newUserObj = {
            user_type: req.body.user_type,
            user_type_id: "",
            user_username: req.body.user_username,
            user_password: req.body.user_password
        };

        async.waterfall([
            insertSuperUser,
            insertUser
        ], function (err, results) {
            if (err) {
                response.message = err;
                throw err;
            }
            response.data = newUserObj;
            res.json(results);
        });
        
        
        function insertSuperUser(callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('superusers')
                .insertOne((newSuperUserObj), function (err, result){
                    if(err){
                        response.message = err;
                        throw err;
                    }
                    response.data = newSuperUserObj;
                    newUserObj.user_type_id = result.insertedId + '';
                    callback(null, newUserObj);
                });
        };

        function insertUser(userObj, callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('users')
                .insertOne((userObj), function (err, result) {
                    if (err) {
                        response.message = err;
                        throw err;
                    }
                    response.data = result;
                    callback(null, result);
                });
        };
    });
});
router.post('/createProfessor', (req, res) => {
    connection((db) =>{
        var newProfessorObj = {
            fname: req.body.fname,
            mname: req.body.mname,
            lname: req.body.lname,
            emp_num: req.body.emp_num,
            position: req.body.position,
            title: req.body.title,
            dept: req.body.dept,
            college: req.body.college,
            is_other_user: req.body.is_other_user,
            other_user_type:req.body.other_user_type,
            is_pm_user: req.body.is_pm_user,
        }
        var newUserObj = {
            user_type: req.body.user_type,
            user_type_id: "",
            user_username: req.body.user_username,
            user_password: req.body.user_password
        };

        async.waterfall([
            insertProfessor,
            insertUser
        ], function (err, results) {
            if (err) {
                response.message = err;
                throw err;
            }
            response.data = newUserObj;
            res.json(results);
        });
        
        
        function insertProfessor(callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('professors')
                .insertOne((newProfessorObj), function (err, result){
                    if(err){
                        response.message = err;
                        throw err;
                    }
                    response.data = newProfessorObj;
                    newUserObj.user_type_id = result.insertedId + '';
                    callback(null, newUserObj);
                });
        };

        function insertUser(userObj, callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('users')
                .insertOne((userObj), function (err, result) {
                    if (err) {
                        response.message = err;
                        throw err;
                    }
                    response.data = result;
                    callback(null, result);
                });
        };
    });
});
router.post('/createStudentUser', (req, res) => {
    connection((db) => {
       
        var newStudentUserObj = {
            fname: req.body.fname,
            mname: req.body.mname,
            lname: req.body.lname,
            stud_num: req.body.stud_num,
            year: req.body.year,
            course: req.body.course,
            dept: req.body.dept,
            college: req.body.college,
            calendar_id: "",
            study_id: "",
            panel: req.body.panel,
            adviser: req.body.adviser,
            presentation_id: "",
            status: req.body.status
        };

        var newUserObj = {
            user_type: req.body.user_type,
            user_type_id: "",
            user_username: req.body.user_username,
            user_password: req.body.user_password
        };
        
        async.waterfall([
            insertStudentUser,
            insertUser
        ], function (err, results) {
            if (err) {
                response.message = err;
                throw err;
            }
            response.data = newUserObj;
            res.json(results);
        });
        
        
        function insertStudentUser(callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('studentusers')
                .insertOne((newStudentUserObj), function (err, result){
                    if(err){
                        response.message = err;
                        throw err;
                    }
                    response.data = newStudentUserObj;
                    newUserObj.user_type_id = result.insertedId + '';
                    callback(null, newUserObj);
                });
        };

        function insertUser(userObj, callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('users')
                .insertOne((userObj), function (err, result) {
                    if (err) {
                        response.message = err;
                        throw err;
                    }
                    response.data = result;
                    callback(null, result);
                });
        };
            
    });
});

router.get('/otherUsers', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('otherusers')
                .find(ObjectID(req.query.id))
                .toArray()
                .then((otherusers) => {
                    if (otherusers) {
                        response.data = otherusers[0];
                        res.json(otherusers[0]);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    else{
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('otherusers')
                .find()
                .toArray()
                .then((otherusers) => {
                    if (otherusers) {
                        response.data = otherusers;
                        res.json(otherusers);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    
});

router.get('/courses', (req, res) => {
    if(req.query.courseName){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('courses')
                .find({ course_name: req.query.courseName })
                .toArray()
                .then((courses) => {
                    if (courses) {
                        response.data = courses[0];
                        res.json(courses[0]);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    else{
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('courses')
                .find()
                .toArray()
                .then((courses) => {
                    if (courses) {
                        response.data = courses;
                        res.json(courses);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    
});

router.get('/departments', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('departments')
                .find(ObjectID(req.query.id))
                .toArray()
                .then((departments) => {
                    if (departments) {
                        response.data = departments[0];
                        res.json(departments[0]);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    else if(req.query.name){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('departments')
                .find({ dept_name: req.query.name })
                .toArray()
                .then((departments) => {
                    if (departments) {
                        response.data = departments[0];
                        res.json(departments[0]);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    else{
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('departments')
                .find()
                .toArray()
                .then((departments) => {
                    if (departments) {
                        response.data = departments;
                        res.json(departments);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    
});

router.get('/colleges', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('colleges')
                .find(ObjectID(req.query.id))
                .toArray()
                .then((colleges) => {
                    if (colleges) {
                        response.data = colleges[0];
                        res.json(colleges[0]);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    else{
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('colleges')
                .find()
                .toArray()
                .then((colleges) => {
                    if (colleges) {
                        response.data = colleges;
                        res.json(colleges);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    
});

router.get('/users', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('users')
                .find({ user_type_id: req.query.id })
                .toArray()
                .then((users) => {
                    if (users) {
                        response.data = users[0];
                        res.json(users[0]);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    else{
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('users')
                .find()
                .toArray()
                .then((users) => {
                    if (users) {
                        response.data = users;
                        res.json(users);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    
});

router.get('/superusers', (req, res) => {
    connection((db) => {
        const myDB = db.db('upm-uramms');
        myDB.collection('superusers')
            .find()
            .toArray()
            .then((superusers) => {
                if (superusers) {
                    response.data = superusers;
                    res.json(superusers);
                } else {
                    res.json(false);
                }
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/studentusers', (req, res) => {
    connection((db) => {
        const myDB = db.db('upm-uramms');
        myDB.collection('studentusers')
            .find()
            .toArray()
            .then((studentusers) => {
                if (studentusers) {
                    response.data = studentusers;
                    res.json(studentusers);
                } else {
                    res.json(false);
                }
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/professorPanelMemberUsers', (req, res) => {
    connection((db) => {
        const myDB = db.db('upm-uramms');
        myDB.collection('professors')
            .find( {"is_pm_user": {$ne:null}} )
            .toArray()
            .then((professors) => {
                if (professors) {
                    response.data = professors;
                    res.json(professors);
                } else {
                    res.json(false);
                }
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
router.get('/professors', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('professors')
                .find(ObjectID(req.query.id))
                .toArray()
                .then((professors) => {
                    if (professors) {
                        response.data = professors[0];
                        res.json(professors[0]);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    else{
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('professors')
                .find()
                .toArray()
                .then((professors) => {
                    if (professors) {
                        response.data = professors;
                        res.json(professors);
                    } else {
                        res.json(false);
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }
    
});


module.exports = router;
