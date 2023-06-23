const user_icon_name= document.querySelector("#user-icon-name");
const home_signin_btn= document.querySelector("#home-signin-btn");
const home_profile_container= document.querySelector("#home-profile-container");
const logout_btn= document.querySelector("#logout_btn");


window.onload =function(){
    
    let login_user= JSON.parse(localStorage.getItem('login_storage'));
    if(login_user!==null){
        
        user_icon_name.innerHTML=login_user.user_name;
        home_signin_btn.classList.toggle('d-none');
        home_profile_container.classList.toggle('d-none');
        
    }
    
    logout_btn.addEventListener('click',function(e){
        console.log(login_user);
        localStorage.removeItem("login_storage");
    })

}
