const functions = require("firebase-functions");
const mysql = require("mysql");

exports.getStudents = functions.https.onCall(async (body, context) => {
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



//createContact -------



exports.createContact = functions.https.onCall(async (payload, context) => {

    console.log(payload.payload);



    // connect to the MYSQL database!
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'contact_manager_db'
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

        const sqlToExecute = "INSERT INTO `Contacts`(`firstName`, `lastName`, `email`, `phoneNumber`) "
            + "VALUES ('" + payload.payload.firstName + "','" + payload.payload.lastName + "','" + payload.payload.email + "','" + payload.payload.phoneNumber + "')";

        console.log("We are about to execue the following SQL Query: " + sqlToExecute);

        connection.query(sqlToExecute, function (err, result, fields) {
            if (err) {
                reject();
            } else {
                accept(result);
            }
        });
    });

    const result = await runQuery;

    return {
        contact: result
    };
});



//getAllContacts ------------------------------------



exports.getAllContacts = functions.https.onCall(async (payload, context) => {

    console.log('hello world!');

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'contact_manager_db'
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
        connection.query("SELECT * FROM Contacts", function (err, result, fields) {
            if (err) {
                reject();
            } else {
                accept(result);
            }
        });
    });

    const resultSet = await runQuery;

    let contactsArr = [];
    for (let i = 0; i < resultSet.length; i++) {
        contactsArr.push({
            id: resultSet[i].id,
            firstName: resultSet[i].firstName,
            lastName: resultSet[i].lastName,
            email: resultSet[i].email,
            phoneNumber: resultSet[i].phoneNumber

        });
    }

    return {
        contacts: contactsArr
    };

});



//getContact -------------------------



exports.getContact = functions.https.onCall(async (payload, context) => {

    console.log(payload);

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'contact_manager_db'
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
        const id = payload.id;
        let myQuery = connection.query("SELECT * FROM `contacts` WHERE id= " + id + "", function (err, result, fields) {
            if (err) {
                reject();
            } else {
                console.log(myQuery)
                accept(result);
            }
        });
    });

    const results = await runQuery;
    return results;



});

// -------------- deleteContact

exports.deleteContact = functions.https.onCall(async (payload, context)=>{
    // connect to the MYSQL database!
    const connection = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: "root",
       port: 8889,
       database: "contact_manager_db"
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
    console.log(payload)
       connection.query("DELETE FROM `contacts` WHERE id = "+payload.id+"", function (err, result, fields) {
           if (err) {
               reject();
           } else {
               accept(result);
           }
       });
   });

   const resultSet = await runQuery;
   return resultSet
})




