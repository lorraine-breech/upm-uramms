const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const async = require('async');
const multer = require('multer');
const fs = require('fs');
var path = require('path');

var requestTime

router.use(function timeLog(req, res, next) {
    requestTime = Date.now();
    next();
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, requestTime + '.' + file.originalname);
    }
});

var upload = multer({ storage: storage }).single('file');

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

router.post('/download', (req, res) => {
    filepath = path.join(__dirname, '../../uploads') + '/' + req.body.fileName;
    res.sendFile(filepath);
});

router.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

router.delete('/uploadedfiles', (req)=>{
    filepath = path.join(__dirname, '../../uploads') + '/' + req.body.fileName;
    fs.unlink(filepath, (err)=>{
        if(err) throw err;
        console.log('succesfully deleted ' + filepath);
    })
});
router.post('/upload', (req, res) => {
    
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            return res.status(422).send("an Error occured")
        }
        var fileObj = {
            originalName: req.file.originalname, 
            uploadName: req.file.filename 
        }
        // No error occured.
        // return res.send(path.substring(8, path.length));
        return res.json({ originalName: req.file.originalname, uploadName: req.file.filename } );
    })
});


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

router.get('/studies', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('studies')
                .find(ObjectID(req.query.id))
                .toArray()
                .then((studies) => {
                    if (studies) {
                        response.data = studies[0];
                        res.json(studies[0]);
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
            myDB.collection('studies')
                .find()
                .toArray()
                .then((studies) => {
                    if (studies) {
                        response.data = studies;
                        res.json(studies);
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

router.post('/studies', (req, res) => {
    connection((db) =>{
        var newStudyObj = {
            title: req.body.title,
            description: req.body.description,
            paper_proposal: req.body.paper_proposal,
            paper_manuscript: req.body.paper_manuscript,
            status: req.body.study_status,
        }
        
        async.waterfall([
            insertStudy,
            updateStudentUser
        ], function (err, results) {
            if (err) {
                response.message = err;
                throw err;
            }
            response.data = results;
            res.json(results);
        });
        
        
        function insertStudy(callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('studies')
                .insertOne((newStudyObj), function (err, result){
                    if(err){
                        response.message = err;
                        throw err;
                    }
                    response.data = newStudyObj;
                    callback(null, newStudyObj);
                });
        };

        function updateStudentUser(newStudyObj, callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('studentusers')
            .updateOne(
                {_id: ObjectID(req.body.studentId)},
                { $set: 
                    {
                        study_id: newStudyObj._id
                    }
                },
                function (err, student) {
                    if (err){
                        response.message = err;
                        throw err;
                    } 
    
                    response.data = student;
                    callback(null, student);
                }
            );
        };
    });
});
router.post('/presentations', (req, res) => {
    connection((db) =>{
        var newPresentationObj = {
            stud_id: req.body.stud_id,
            study_id: req.body.study_id,
            presentation_type: req.body.presentation_type,
            responses: req.body.responses,
            is_passed: req.body.is_passed,
            date: req.body.date,
            time_start: req.body.time_start,
            time_end: req.body.time_end,
            place: req.body.place
        };
        
        async.waterfall([
            insertPresentation,
            updateStudentUser
        ], function (err, results) {
            if (err) {
                response.message = err;
                throw err;
            }
            response.data = results;
            res.json(results);
        });

        function insertPresentation(callback){
            const myDB = db.db('upm-uramms');
            myDB.collection('presentations')
                .insertOne((newPresentationObj), function (err, result){
                    if(err){
                        response.message = err;
                        throw err;
                    }
                    response.data = newPresentationObj;
                    callback(null, newPresentationObj);
                });
        };

        function updateStudentUser(newPresentationObj, callback){
            const myDB = db.db('upm-uramms');
            if(req.body.presentation_type === "proposal"){
                myDB.collection('studentusers')
                .updateOne(
                    {_id: ObjectID(req.body.studentId)},
                    { $set: 
                        {
                            presentation_p_id: newPresentationObj._id
                        }
                    },
                    function (err, student) {
                        if (err){
                            response.message = err;
                            throw err;
                        } 
                        response.data = student;
                        callback(null, student);
                    }
                );
            }
            else{
                myDB.collection('studentusers')
                .updateOne(
                    {_id: ObjectID(req.body.studentId)},
                    { $set: 
                        {
                            presentation_m_id: newPresentationObj._id
                        }
                    },
                    function (err, student) {
                        if (err){
                            response.message = err;
                            throw err;
                        } 
                        response.data = student;
                        callback(null, student);
                    }
                );
            } 
        };
    });
});

router.post('/psrequests', (req, res) => {
    connection((db) => {
        var newPSRequestObj = {
            psrequest_stud_id: req.body.psrequest_stud_id,
            psrequest_pres_type: req.body.psrequest_pres_type,
            psrequest_pres_date: req.body.psrequest_pres_date,
            psrequest_pres_time_start: req.body.psrequest_pres_time_start,
            psrequest_pres_time_end: req.body.psrequest_pres_time_end,
            psrequest_pres_place: req.body.psrequest_pres_place,
            psrequest_responses: req.body.psrequest_responses,
            psrequest_date_created: req.body.psrequest_date_created,
            psrequest_is_approved: req.body.psrequest_is_approved,
        }
        const myDB = db.db('upm-uramms');
        myDB.collection('psrequests')
        .insertOne((newPSRequestObj), function (err, result){
            if(err){
                response.message = err;
                throw err;
            }
            response.data = newPSRequestObj;
            res.json(result);
        });    
    });
});

router.get('/psrequests', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('psrequests')
                .find({psrequest_stud_id: req.query.id})
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
router.get('/acrequests', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('acrequests')
                .find({acrequest_stud_id: req.query.id})
                .toArray()
                .then((acrequests) => {
                    if (acrequests) {
                        response.data = acrequests;
                        res.json(acrequests);
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
            myDB.collection('acrequests')
                .find()
                .toArray()
                .then((acrequests) => {
                    if (crequests) {
                        response.data = acrequests;
                        res.json(acrequests);
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
router.post('/acrequests', (req, res) => {
    connection((db) => {
        var newACRequestObj = {
            acrequest_type: req.body.acrequest_type,
            acrequest_stud_id: req.body.acrequest_stud_id,
            acrequest_role_type: req.body.acrequest_role_type,
            acrequest_stud_remarks: req.body.acrequest_stud_remarks,
            acrequest_change_from: req.body.acrequest_change_from,
            acrequest_change_to: req.body.acrequest_change_to,
            acrequest_responses: req.body.acrequest_responses,
            acrequest_date_created: req.body.acrequest_date_created,
            acrequest_is_approved: req.body.acrequest_is_approved,
        }
        const myDB = db.db('upm-uramms');
        myDB.collection('acrequests')
        .insertOne((newACRequestObj), function (err, result){
            if(err){
                response.message = err;
                throw err;
            }
            response.data = newACRequestObj;
            res.json(result);
        
        });    
    });
});

router.post('/parequests', (req, res) => {
    connection((db) => {
        var newPARequestObj = {
            parequest_stud_id: req.body.parequest_stud_id,
            parequest_paper_type: req.body.parequest_paper_type,
            parequest_presentation_id: req.body.parequest_presentation_id, 
            parequest_responses: req.body.parequest_responses,
            parequest_revisions: req.body.parequest_revisions,
            parequest_date_created: req.body.parequest_date_created,
            parequest_level: req.body.parequest_level,
        }
        const myDB = db.db('upm-uramms');
        myDB.collection('parequests')
        .insertOne((newPARequestObj), function (err, result){
            if(err){
                response.message = err;
                throw err;
            }
            response.data = newPARequestObj;
            callback(null, newPARequestObj);
        });    
    });
});

router.get('/parequests', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('parequests')
                .find({parequest_stud_id: req.query.id})
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
                .find({cprequest_stud_id: req.query.id})
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
router.delete('/psrequests/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

        myDB.collection('psrequests')
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
router.delete('/cprequests/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

        myDB.collection('cprequests')
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
router.delete('/acrequests/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

        myDB.collection('acrequests')
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
router.delete('/parequests/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

        myDB.collection('parequests')
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
router.delete('/studies/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

        myDB.collection('studies')
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
router.delete('/presentations/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

        myDB.collection('presentations')
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
router.delete('/otherusers/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

        myDB.collection('otherusers')
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
router.delete('/panelmemberusers/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

        myDB.collection('panelmemberusers')
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
router.delete('/superusers/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

        myDB.collection('superusers')
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
router.delete('/professors/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

        myDB.collection('professors')
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
router.delete('/studentusers/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

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
router.delete('/users/:id', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        const id = new ObjectID(req.params.id);
        console.log("REQUEST ID: "+req.params.id);

        myDB.collection('users')
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
router.put('/panelmemberusers', (req, res)=>{
    connection((db) =>{
        const myDB = db.db('upm-uramms');
        var updatedPanelMember = req.body;
        console.log(req.body._id);
        
        myDB.collection('panelmemberusers')
        .updateOne(
            {_id: ObjectID(updatedPanelMember._id)},
            { $set: 
                {
                    pm_prof_id: updatedPanelMember.pm_prof_id,
                    pm_advisee_id: updatedPanelMember.pm_advisee_id,
                    pm_coadvisee_id: updatedPanelMember.pm_coadvisee_id,
                    pm_panelee_id: updatedPanelMember.pm_panelee_id,
                    pm_calendar_id: updatedPanelMember.pm_calendar_id,
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
            pm_full_name: req.body.pm_full_name,
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
            presentation_p_id: "",
            presentation_m_id: "",
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
router.get('/presentations', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('presentations')
                .find(ObjectID(req.query.id))
                .toArray()
                .then((presentations) => {
                    if (presentations) {
                        response.data = presentations[0];
                        res.json(presentations[0]);
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
            myDB.collection('presentations')
                .find()
                .toArray()
                .then((presentations) => {
                    if (presentations) {
                        response.data = presentations;
                        res.json(presentations);
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
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('studentusers')
                .find(ObjectID(req.query.id))
                .toArray()
                .then((studentusers) => {
                    if (studentusers) {
                        response.data = studentusers[0];
                        res.json(studentusers[0]);
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
    }
});
router.get('/panelmemberusers', (req, res) => {
    if(req.query.id){
        connection((db) => {
            const myDB = db.db('upm-uramms');
            myDB.collection('panelmemberusers')
                .find(ObjectID(req.query.id))
                .toArray()
                .then((panelmemberusers) => {
                    if (panelmemberusers) {
                        response.data = panelmemberusers[0];
                        res.json(panelmemberusers[0]);
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
            myDB.collection('panelmemberusers')
                .find()
                .toArray()
                .then((panelmemberusers) => {
                    if (panelmemberusers) {
                        response.data = panelmemberusers;
                        res.json(panelmemberusers);
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
