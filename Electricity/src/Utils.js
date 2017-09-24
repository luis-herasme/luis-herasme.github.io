function randomSign (number) {
  if (!number) return Math.random() < 0.5 ? 1 : -1
  else return Math.random() < 0.5 ? number : -1 * number
}

function randomNumber (number) {
  return randomSign(Math.random() * number)
}

export { randomSign, randomNumber }
