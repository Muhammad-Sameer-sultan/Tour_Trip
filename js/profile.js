let p_email = document.querySelector('#p-email');
let p_name = document.querySelector('#p-name');
let p_dob = document.querySelector('#p-dob');
let p_gender = document.querySelector('#p-gender');
let user_icon_name = document.querySelector('#user-icon-name');


window.onload=function () {

    let login_user = JSON.parse(localStorage.getItem('login_storage'));

if(login_user!==null){
console.log(p_email);
    user_icon_name.innerHTML = login_user.user_name;
    p_email.innerHTML = login_user.user_email;
    p_name.innerHTML = login_user.user_name;
    p_dob.innerHTML = login_user.user_dob;
    p_gender.innerHTML = login_user.user_gender;
    
}

logout_btn.addEventListener('click',function(e){
    localStorage.removeItem("login_storage");
})
}