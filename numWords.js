// Program to count the number of words in a sentence
// const sentence = 'I am awesome in programming.'
// const result = sentence.split('.')[0].split(' ').length
// console.log(result)
// sentence.length

function numWords(sentence) {
  const result = sentence.split('.')[0].split(' ').length
  return `Number of words: ${result}`
}

const s1 = 'I am awesome in programming skills.'
console.log(numWords(s1))

const s2 = 'Javascript is great and full of fun.'
console.log(numWords(s2))

const s3 = 'Welcome to Gomycode learning platform.'
console.log(numWords(s3))
