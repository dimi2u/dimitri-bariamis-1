console.log("Welcome to View!");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const index = urlParams.get('index');
const existingContacts = JSON.parse(localStorage.getItem('myContacts'));


document.getElementById('firstName').innerHTML = existingContacts[index].firstName;
document.getElementById('lastName').innerHTML = existingContacts[index].lastName;
document.getElementById('email').innerHTML = existingContacts[index].email;
document.getElementById('phoneNumber').innerHTML = existingContacts[index].phoneNumber;


console.log(queryString);
console.log(urlParams);
console.log(index);
console.log(existingContacts);
console.log(existingContacts[index]);
console.log(existingContacts[index].firstName);
console.log(JSON.parse(localStorage.getItem('myContacts')));