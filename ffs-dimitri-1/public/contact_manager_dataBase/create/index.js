console.log("Welcome to Create!");
const functions = require("firebase-functions");
const mysql = require("mysql");

/*
const saveContact = function () {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (firstName == '' || lastName == '') {
        alert('First Name and Last Name is required.');
    } else if (email == '' && phoneNumber == '') {
        alert('Email or Phone Number is required.');
    } else {
        const newContact = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber
        };
*/

exports.createContact = functions.https.onCall(async (payload, context) => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'contact_manager_db'
    });

    const connectToMySQL = new Promise((accept, reject) => {
        connection.connect(function (connectionError) {
            if (connectionError) {
                reject();
            } else {
                accept();
            }
        });
    });

    await connectToMySQL;

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

    console.log(resultSet);

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
        Contact: contactsArr
    };
});
/*

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phoneNumber').value = '';
*/
window.location.href = "file:///Users/dimitricbariamis/Documents/GitHub/dimitri-bariamis-1/ffs-dimitri-1/public/contact_manager_dataBase/view_all/index.html";
/*        
    }
}
*/
