'use strict'

const loginFormEl = document.querySelector('.js-login')
const passwordFormEl = document.querySelector('.js-password')
const formEl = document.querySelector('.js-form')
const openBtnEl = document.querySelector('.js-btn')
const errorBtnEl = document.querySelector('.error-text')





const checkLogin = (event) => {
    const login = loginFormEl.value.toLowerCase()
    const password = passwordFormEl.value.toLowerCase()


    if(login === 'admin' && password === 'goit') {
        openBtnEl.href = './main.html'
        return
    }
    errorBtnEl.classList.add('is-open')
    openBtnEl.href = '#'
    return
    
}

document.addEventListener('keydown', event => {
    if (event.code === 'Enter') {
        checkLogin(openBtnEl)
        openBtnEl.click()
    }});

openBtnEl.addEventListener('click', checkLogin)