'use strict'

const inputPriceEl = document.querySelector('.box-input')
let balanceEl = document.querySelector('.balance')

const topBtnEl = document.querySelector('.js-btn-top')
const downBtnEl = document.querySelector('.js-btn-down')

const historyEl = document.querySelector('.main-box__history')

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
        alert('Снятие суммы невозможно, недостаточно средств')
      } else {
        this.balance -= amount;
        this.transactions.push('Вывод')
        this.transAmount.push(amount)
        this.id.push('_' + Math.random().toString(36).substr(2, 9))
      }
    },

  };

let total = 0;

const onTopBalance = (event) => {
    account.deposit(Number(inputPriceEl.value))
    balanceEl.textContent = account.balance

    let newTransaction = document.createElement('a')
    newTransaction.classList.add('main-box__number-hystory')
    newTransaction.href = '#'
    newTransaction.textContent = `${account.transactions[total]} на ${account.transAmount[total]} грн id:${account.id[total]}`
    total += 1
    historyEl.appendChild(newTransaction)
}

 topBtnEl.addEventListener('click', onTopBalance)



const onDownBalance = (event) => {
    account.withdraw(Number(inputPriceEl.value))
    balanceEl.textContent = account.balance


if (account.balance >= Number(inputPriceEl.value)) {
    let newTransaction = document.createElement('a')
    newTransaction.classList.add('main-box__number-hystory')
    newTransaction.href = '#'
    newTransaction.textContent = `${account.transactions[total]} на ${account.transAmount[total]} грн id:${account.id[total]}`
    total += 1
    historyEl.appendChild(newTransaction)
}


}
downBtnEl.addEventListener('click', onDownBalance)


// const onClickLink = document.querySelectorAll('.main-box__number-hystory')
// console.log(onClickLink);

// let lightbox = new SimpleLightbox('.main-box__history a', {sourceAttr: `href`});


// const onClickLinks = (event) => {

//   event.preventDefault()
//   open
    
//     if (event.target.nodeName !== 'A') {
//       return
//     }
//     console.log(event.target);
// }

// historyEl.addEventListener('click', onClickLinks)