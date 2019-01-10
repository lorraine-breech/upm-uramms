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

router.get('/professors', (req, res) => {
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
});


module.exports = router;


// THIS IS COPY-PASTED CODE FROM COURSETRO
/*


// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});


const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

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

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        const myDB = db.db('upm-uramms');
        myDB.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
/*
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
/*
// Get super users
router.get('/superusers', (req, res) => {
    connection((db) => {
        const myDB = db.db('upm-uramms');
        myDB.collection('superusers')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});


module.exports = router;
 Get users (MEAN DB) when testing
router.get('/users', (req, res) => {
    connection((db) => {
        const myDB = db.db('mean');
        myDB.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
*/
