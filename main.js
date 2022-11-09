
// const forms= document.querySelector(".forms");
//       links= document.querySelectorAll(".link");
  
// links.forEach(link => {
//     link.addEventListener("click", e =>{
//         e.preventDefault();
//         forms.classList.toggle("show-signup");
    
//     })
    
// });  
// forms.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const loginData = {
//         username: event.target.elements['username'].value,
//         email: event.target.elements['email'].value,
//         password: event.target.elements['password'].value,
//         firstname: event.target.elements['firstname'].value,
//         lastname: event.target.elements['lastname'].value,
//     }
//     localStorage.setItem('username',username)
//     localStorage.setItem('password',password)
//     localStorage.setItem('email',email)
//     localStorage.setItem('firstname',firstname)
//     localStorage.setItem('lastname',lastname)   
     
//     alert('save sucessfuly')
// });    


      function takevalue(){
        let username =document.getElementById("username").value;
        let email =document.getElementById("email").value;
        let password =document.getElementById("password").value;
        document.write("your info: <BR>"+"username:"+username+"<br>");
        document.write("email:"+email+"<br>");
        document.write("password:"+password+"<br>");
      }
      let signup =document.querySelector(".signup-link");
      signup.addEventListener('click', (e) => {
        console.log('fauyfgwkjfiae')
        document.querySelector('.signup').classList.toggle('hide');
        document.querySelector('.login').classList.toggle('hide');
    })
      let login =document.querySelector(".login-link");
      login.addEventListener('click', (event) => {
        console.log("hello")
        document.querySelector('.login').classList.toggle('hide');
        document.querySelector('.signup').classList.toggle('hide');
      })