// Program to count the number of characters in a sentence
// const sentence = 'I am awesome.'
// console.log(sentence.split(' ').join('').split('.').join('').length)
// sentence.length

// function
function numChars(sentence) {
  return sentence.split(' ').join('').split('.').join('').length
}

const s1 = 'I am awesome.'
console.log(numChars(s1))

const s2 = 'Javascript is great.'
console.log(numChars(s2))
