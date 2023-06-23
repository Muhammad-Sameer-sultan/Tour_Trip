const user_icon_name= document.querySelector("#user-icon-name");


window.onload =function(){
    
    let login_user= JSON.parse(localStorage.getItem('login_storage'));
    console.log(login_user);
    user_icon_name.innerHTML=login_user.user_name;

}
