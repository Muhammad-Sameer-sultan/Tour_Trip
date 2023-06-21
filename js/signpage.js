console.log("link checking");
// sign up data fetch
let signup_email = document.querySelector('#signup-email');
let signup_user = document.querySelector('#signup-user');
let dob = document.querySelector('#dob');
let inlineRadio1 = document.querySelector('#inlineRadio1');
let inlineRadio2 = document.querySelector('#inlineRadio2');
let signup_password = document.querySelector('#signup-password');
let signup_confirm_password = document.querySelector('#signup-confirm-password');
let signup_btn = document.querySelector('#signup-btn');


signup_btn.addEventListener('click', function (e) {
    e.preventDefault();
    // if(inlineRadio1.checked){

    // }
    let gender;
    inlineRadio1.checked ? gender = "Male" : gender = "Female";
    let new_user = {
        user_email: signup_email.value,
        user_name: signup_user.value,
        user_dob: dob.value,
        user_gender: gender,
        user_passwod: signup_password.value,
        user_confirm_password: signup_confirm_password.value

    }

    let user_storage = localStorage.getItem('user_storage');
    let user_list;
    if (user_storage === null) {
        user_list = [];
    }
    else {
        user_list = JSON.stringify(user_storage);
    }

    let password_check = signup_password.value !== signup_confirm_password.value ? true : false;
    if (false) {

        console.log('if');
    }
    else if (password_check) {
        show('Error', 'incorrect password');
    }

    else {
        user_list.push(new_user);
        console.log('else');
    }


})


function show(type, message) {
    let divmessage = document.getElementById('message');
    // console.log(divmessage);
    let html = [
        `<div class="alert alert-danger alert-${type} alert-dismissible p-2" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');
    divmessage.innerHTML = html;

    setTimeout(function () {
        divmessage.innerHTML = "";
    }, 1000)
}
