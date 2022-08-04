console.log("Welcome to View!");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);



const existingContacts = JSON.parse(localStorage.getItem('myContacts'));

let myCards = '';

for (let i = 0; i < existingContacts.length; i++) {
        myCards += '<tr>';
        myCards += '<td>' + existingContacts[i].firstName + '</td>';
        myCards += '<td>' + existingContacts[i].lastName + '</td>';
        myCards += '<td>' + existingContacts[i].email + '</td>';
        myCards += '<td>' + existingContacts[i].phoneNumber + '</td>';
        myCards += '</tr>';
}
console.log(queryString);
console.log(urlParams);
console.log(existingContacts)
console.log(existingContacts[0]);
console.log(JSON.parse(localStorage.getItem('myContacts')));
document.getElementById("contactCard" + [i]).innerHTML = myCards;