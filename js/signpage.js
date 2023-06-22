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
let signup_link = document.querySelector('#signup_link');


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

    let user_storage = localStorage.getItem('user_storages');
    let user_list;
    if (user_storage === null) {
        user_list = [];
    }
    else {
        user_list = JSON.parse(user_storage);
    }

    let password_check = signup_password.value !== signup_confirm_password.value ? true : false;
    let email_check= user_list.some(user=>
        {
            return user.user_email===new_user.user_email;   
        })
    
    if (email_check) {

        show('Error', 'This Email is already exist');
    }
    else if (password_check) {
        show('Error', 'incorrect password');
    }

    else {
        user_list.push(new_user);
        user_storage= JSON.stringify(user_list);
        localStorage.setItem('user_storages',user_storage);
        show('Success','your Account is created Suceess');
        document.querySelector('.alert').classList.replace('alert-danger','alert-success');
        window.location.href = "sign_in page.html";
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
//sign up link


signup_link.addEventListener('click',function(e){
        signup_btn.classList.toggle('d-block');
        inner.classList.toggle('d-none');
});