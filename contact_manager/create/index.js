console.log("Welcome to Create!");

if (!localStorage.getItem('myContacts')) {
    localStorage.setItem('myContacts', JSON.stringify([]));
}

const saveContact = function() {
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
    
        const existingContacts = JSON.parse(localStorage.getItem('myContacts'));
        existingContacts.push(newContact);
        localStorage.setItem('myContacts', JSON.stringify(existingContacts));
    
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phoneNumber').value = '';

        window.location.href = "file:///Users/Dimitri/Documents/GitHub/dimitri-bariamis-1/contact_manager/view_all/index.html";
    }  
}



