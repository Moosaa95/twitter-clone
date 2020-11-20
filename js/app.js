//make function for queryselector so as to practice DRY
function qs(prop) {
    return document.querySelector(prop)
}

const signUp = qs('#signUpForm')
const login = qs('#loginForm')
const signUpScreen = qs('#signUp')
const signUpBtn = qs('#signUpBtn')
const closeBtn = qs('#close')
const loginScreen = qs('#login')
const loginBtn = qs('#loginBtn')
const home = qs('#home')
const fluid = qs('.fluid-container')
const msg = qs('.message')


//open the sign up page
function signupFunc() {
    signUpScreen.style.display = 'block'
}

function loginFunc() {
    loginScreen.style.display = 'block'
}

//hide the sign up page
function hideSignUp() {
    signUpScreen.style.display = 'none'
}

//click event for sign up button
signUpBtn.addEventListener('click', signupFunc)
    //click eevent for log in button
loginBtn.addEventListener('click', loginFunc)
    //click event for close button
closeBtn.addEventListener('click', hideSignUp)

signUp.addEventListener('submit', function(e) {
    //prevent it from reloading automatically
    e.preventDefault()
        //create an object to hold data from the sign up page
    let formData = {
            name: qs('#name').value,
            password: qs('#password').value

        }
        //converting the object to string 
    localStorage.setItem('formData', JSON.stringify(formData))
        //empty the input after submitting 
    name = qs('#name').value = ""
    password = qs('#password').value = ""
})

/* let name = qs('#name').value
    let password = qs('#password').value
    localStorage.setItem('name', JSON.stringify(name))
    localStorage.setItem('password', JSON.stringify(password))
        //localStorage.setItem('formData', JSON.stringify(formData))
    console.log('user add');
}) */


login.addEventListener('submit', function(e) {
    //prevent default
    e.preventDefault()


    name = qs('#name').value
    password = qs('#password').value
    var user = JSON.parse(localStorage.getItem('formData'))
    console.log(user.name);
    if (user.name === name && password === user.password) {
        home.style.display = 'block'
        signUpScreen.style.display = 'none'
        loginScreen.style.display = 'none'
        fluid.style.display = 'none'

        msg.style.display = 'block'


    } else {
        console.log('nott');
    }
})

/*  var user = JSON.parse(localStorage.getItem('name'))
 if (name == user) {
     console.log('congrat');
 } */

/* user = JSON.parse(localStorage.getItem('name'))
pass = JSON.parse(localStorage.getItem('password')) */


/*   if (user == name && pass == password) {
      console.log('congrat');
  } else {
      name = JSON.parse(localStorage.getItem(name))
  } */
/* var entry = localStorage.getItem("formData")
console.log(entry.name);
if (name == entry.name && password == entry.password) {
    console.log('contfsd');
} */