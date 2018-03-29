function randomSign () {
  return Math.random() < 0.5 ? 1 : -1
}

function getNumber (number) {
  return randomSign() * random(number)
}

function random (number) {
  return Math.random() * number
}

export { randomSign, getNumber, random }
