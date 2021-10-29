let sortNumber = parseInt(Math.random() * 11)

function Play() {
  let myNumber = parseInt(document.getElementById('received').value)
  let element = document.getElementById('endResult')

  if (myNumber === sortNumber) {
    element.innerHTML = 'Congratulations, you won! ' + sortNumber
  } else if (myNumber < 0 || myNumber > 10) {
    element.innerHTML = 'Please, enter numbers 0 to 10'
  } else if (myNumber < sortNumber) {
    element.innerHTML = 'Your number is smaller than machine'
  } else if (myNumber > sortNumber) {
    element.innerHTML = 'Your number is bigger than machine'
  }
}
