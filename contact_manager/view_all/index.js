console.log("Welcome to View All!");

const existingContacts = JSON.parse(localStorage.getItem('myContacts'));


let myTable = '';

for (let i = 0; i < existingContacts.length; i++) {
        myTable += '<tr>';
        myTable += '<td><a href="file:///Users/Dimitri/Documents/GitHub/dimitri-bariamis-1/contact_manager/view/index.html?index=' + i + '"</a>' + existingContacts[i].firstName + '</td>';
        myTable += '<td>' + existingContacts[i].lastName + '</td>';
        myTable += '<td>' + existingContacts[i].email + '</td>';
        myTable += '<td>' + existingContacts[i].phoneNumber + '</td>';
        myTable += '</tr>';
}

document.getElementById("contactBody").innerHTML = myTable;