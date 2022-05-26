'use strict'

// Переменные

const inputPriceEl = document.querySelector('.box-input')
let balanceEl = document.querySelector('.balance')
const balanceBox = document.querySelector('.main-box__all')
const balanceChangeEl = document.querySelector('.main-box___all-icon')
const balanceDollarEl = document.querySelector('.balance-dollar')
const dollarBoxEl = document.querySelector('.main-box__balance-dollar')

const topBtnEl = document.querySelector('.js-btn-top')
const downBtnEl = document.querySelector('.js-btn-down')

const alertPriceEl = document.querySelector('.alert-price')

const historyEl = document.querySelector('.main-box__history')
const clearHistoryBtn = document.querySelector('.clear-history')

// Главная информация

const account = {
    balance: 0,
    transactions: [],
    id: [],
    transAmount: [],
  


    deposit(amount) {
      this.balance += amount;
      this.transactions.push('Пополнение')
      this.transAmount.push(amount)
      this.id.push('_' + Math.random().toString(36).substr(2, 9))
    },

    withdraw(amount) {
      if (amount > this.balance) {
        
      } else {
        this.balance -= amount;
        this.transactions.push('Вывод')
        this.transAmount.push(amount)
        this.id.push('_' + Math.random().toString(36).substr(2, 9))
      }
    },

  };

let total = 0;

// Операция deposit

const onTopBalance = (event) => {
    account.deposit(Number(inputPriceEl.value))
    balanceEl.textContent = account.balance

    let newTransaction = document.createElement('a')
    newTransaction.classList.add('main-box__number-hystory')
    newTransaction.classList.add('deposit')
    newTransaction.href = '#'

    newTransaction.textContent = `${account.transactions[total]} на ${account.transAmount[total]} грн id:${account.id[total]}`
    total += 1
  
    historyEl.appendChild(newTransaction)

    return inputPriceEl.value = ''
}

 topBtnEl.addEventListener('click', onTopBalance)

// Операция withdraw

const onDownBalance = (event) => {
    
  if (Number(account.balance) >= Number(inputPriceEl.value)) {
    account.withdraw(Number(inputPriceEl.value))
    balanceEl.textContent = account.balance
      
      let newTransaction = document.createElement('a')
      newTransaction.classList.add('main-box__number-hystory')
      newTransaction.classList.add('withdraw')
      newTransaction.href = '#'

      newTransaction.textContent = `${account.transactions[total]} на ${account.transAmount[total]} грн id:${account.id[total]}`
      total += 1

      historyEl.appendChild(newTransaction)
      inputPriceEl.value = ''
      return 
  }
    alertPriceEl.classList.add('is-open')
    inputPriceEl.value = ''
    return
  
}

downBtnEl.addEventListener('click', onDownBalance)

// Инпут, подсвечивание кнопки 

const onCheckedValue = event => {
  alertPriceEl.classList.remove('is-open')
  dollarBoxEl.classList.remove('is-open')

  const inputValue = (Number(event.target.value))
  const balanceValue = (Number(balanceEl.textContent))
  

  if (inputValue < balanceValue) {
    downBtnEl.classList.remove('btn-down')
    return
  } else if (inputValue > balanceValue) {
    downBtnEl.classList.add('btn-down')
    return
  } 

}

inputPriceEl.addEventListener('input', onCheckedValue)

// Перевод в доллары

const onDollarChange = event => {
  dollarBoxEl.classList.toggle('is-open')
  balanceDollarEl.textContent = Math.round(account.balance / 33)
}


balanceChangeEl.addEventListener('click', onDollarChange)

// Очистка поля транзакций 

const onClearHystory = event => {
  const deleteElements = document.querySelectorAll('.main-box__number-hystory')
  deleteElements.forEach(el => el.remove())
}


clearHistoryBtn.addEventListener('click', onClearHystory)