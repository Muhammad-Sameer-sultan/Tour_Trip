let p_email = document.querySelector('#p-email');
let p_name = document.querySelector('#p-name');
let p_dob = document.querySelector('#p-dob');
let p_gender = document.querySelector('#p-gender');


window.onload=function () {

    let login_user = JSON.parse(localStorage.getItem('login_storage'));


    p_email.innerHTML = login_user.user_email;
    p_name.innerHTML = login_user.user_name;
    p_dob.innerHTML = login_user.user_dob;
    p_gender.innerHTML = login_user.user_gender;
}