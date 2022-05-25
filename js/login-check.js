'use strict'

const loginFormEl = document.querySelector('.js-login')
const passwordFormEl = document.querySelector('.js-password')
const openBtnEl = document.querySelector('.js-btn')





const checkLogin = (event) => {
    const login = loginFormEl.value.toLowerCase()
    const password = passwordFormEl.value.toLowerCase()
    if(login === 'admin' && password === 'goit') {
        openBtnEl.href = './main.html'
        return
    }
    openBtnEl.href = '#'
    return
    
}

openBtnEl.addEventListener('click', checkLogin)