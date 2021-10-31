let sortNumber = parseInt(Math.random() * 11)
// let sortNumber = 5
var tries = 3
lifes = document.getElementById('lifes').innerHTML = `Lifes: ${tries}`

function Play() {
  let myNumber = parseInt(document.getElementById('received').value)
  let element = document.getElementById('endResult')

  if (tries > 0) {
    if (myNumber === sortNumber) {
      element.innerHTML = 'Congratulations, you won! ' + sortNumber
      eraseAnswer()
    } else if (myNumber < 0 || myNumber > 10) {
      element.innerHTML = 'Please, enter numbers 0 to 10'
      eraseAnswer()
    } else if (myNumber < sortNumber) {
      element.innerHTML = 'Your number is smaller than machine'
      tries--
      lifes = document.getElementById('lifes').innerHTML = `Lifes: ${tries}`
      eraseAnswer()
    } else if (myNumber > sortNumber) {
      element.innerHTML = 'Your number is bigger than machine'
      tries--
      lifes = document.getElementById('lifes').innerHTML = `Lifes: ${tries}`
      eraseAnswer()
    }
  }
  if (tries === 0) {
    lifes = document.getElementById('lifes').innerHTML = `Lifes: ${0}`
    element.innerHTML = 'You lose!  Number secret: ' + sortNumber
  }
}

function eraseAnswer() {
  let erase = document.getElementById('received')
  erase.value = ''
}
