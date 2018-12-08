// THIS IS COPY-PASTED CODE FROM COURSETRO

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

*/

module.exports = router;

/*/ Get users (MEAN DB) when testing
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
