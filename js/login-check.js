'use strict'

const loginFormEl = document.querySelector('.js-login')
const passwordFormEl = document.querySelector('.js-password')
const formEl = document.querySelector('.js-form')
const openBtnEl = document.querySelector('.js-btn')
const errorBtnEl = document.querySelector('.error-text')


// Проверка Логина и Пароля

const checkLogin = (event) => {
    const login = loginFormEl.value.toLowerCase()
    let password = passwordFormEl.value.toLowerCase()


    if(login === 'admin' && password === 'goit') {
        openBtnEl.href = './main.html'
        return
    }
    errorBtnEl.classList.add('is-open')
    openBtnEl.href = '#'

    onResetForm(formEl)
    return
    
}

// Сброс формы

function onResetForm(form) {
    
    formEl.reset()
    localStorage.removeItem("login-form")
}


// Нажатие - Enter

document.addEventListener('keydown', event => {
    if (event.code === 'Enter') {
        checkLogin(openBtnEl)
        openBtnEl.click()
        onResetForm(formEl)
    }});

openBtnEl.addEventListener('click', checkLogin)


// Запоминание логина


const formData = {}

const onChangeForm = event => {
    const {target} = event

    const value = target.value
    const name = target.name

    formData[name] = value

    localStorage.setItem("login-form", JSON.stringify(formData))
}

const onCheckedForm = form => {
    const formDataLocal = JSON.parse(localStorage.getItem("login-form"))
    const formElements = form.elements

    for (const key in formDataLocal) {
        if(formDataLocal.hasOwnProperty(key)) {
            formElements[key].value = formDataLocal[key]
        }
    }
}

onCheckedForm(formEl)

formEl.addEventListener('input', onChangeForm)






