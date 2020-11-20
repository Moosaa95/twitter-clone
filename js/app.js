//make function for queryselector so as to practice DRY
function qs(prop) {
    return document.querySelector(prop)
}


//getting the variables

const signUp = qs('#signUpForm')
const login = qs('#loginForm')
const signUpScreen = qs('#signUp')
const signUpBtn = qs('#signUpBtn')
const closeBtn = qs('#close')
const loginScreen = qs('#login')
const loginBtn = qs('#loginBtn')
const home = qs('#home')
const fluid = qs('.fluid-container')
const userName = qs('#name').value
const pass = qs('#password').value
const logoutBtn = qs('#logout')
const profileBtn = qs('#profileBtn')



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

function showLogout() {
    logoutBtn.style.display = 'block'
}

//click event for sign up button
signUpBtn.addEventListener('click', signupFunc)
    //click eevent for log in button
loginBtn.addEventListener('click', loginFunc)
    //click event for close button
closeBtn.addEventListener('click', hideSignUp)
    //display the logout button
profileBtn.addEventListener('click', showLogout)

logoutBtn.addEventListener('click', function() {
    fluid.style.display = 'none'
    hideSignUp()
    loginScreen.style.display = 'block'
    home.style.display = 'none'



})

signUp.addEventListener('submit', function(e) {
    //prevent it from reloading automatically
    e.preventDefault()
        //create an object to hold data from the sign up page

    let formData = {
            name: userName,
            password: pass

        }
        //converting the object to string 
    localStorage.setItem('formData', JSON.stringify(formData))
    alert('success')
        //empty the input after submitting 
    name = qs('#name').value = ""
    password = qs('#password').value = ""

})



login.addEventListener('submit', function(e) {
    //prevent default
    e.preventDefault()



    var user = JSON.parse(localStorage.getItem('formData'))
    if (userName === '' && pass === '') {
        alert('fields should not be left empty')
    } else if (user.name === userName && pass === user.password) {
        home.style.display = 'block'
        signUpScreen.style.display = 'none'
        loginScreen.style.display = 'none'
        fluid.style.display = 'none'



    } else {
        console.log('check fills');
    }
})