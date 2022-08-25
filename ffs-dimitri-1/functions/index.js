const functions = require("firebase-functions");
const mysql = require("mysql");

exports.getStudents = functions.https.onCall(async (payload, context) => {

    // connect to the MYSQL database!
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'TestDB'
    });

    const connectToMySQL = new Promise((accept, reject) => {
        // BLOCK START
        connection.connect(function (connectionError) {
            if (connectionError) {
                reject(); // calls the "catch"
            } else {
                accept(); // calls the "then"
            }
        });
        // BLOCK END
    });

    await connectToMySQL;

    // execute the query
    const runQuery = new Promise((accept, reject) => {
        connection.query("SELECT * FROM Students", function (err, result, fields) {
            if (err) {
                reject();
            } else {
                accept(result);
            }
        });
    });

    const resultSet = await runQuery;

    let studentsArr = [];
    for (let i = 0; i < resultSet.length; i++) {
        studentsArr.push({
            id: resultSet[i].id,
            fullName: resultSet[i].fullName,
            createdDate: resultSet[i].createdDate.getTime()
        });
    }

    return {
        students: studentsArr
    };

});



/*
exports.getContact = functions.https.onCall(async (body, context) => {

});
exports.getAllContacts = functions.https.onCall(async (body, context) => {

});
exports.createContact = functions.https.onCall(async (body, context) => {

});
*/