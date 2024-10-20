// Program to fetch the number of vowels in a sentence

// const sentence = 'welcome to javascript.'
// const result = sentence.split('.')[0].split(' ').join('')
// console.log(result)

// const vowelArray = []
// const vowels = ['a', 'e', 'i', 'o', 'u']
// for (el of result) {
//   if (vowels.includes(el)) {
//     vowelArray.push(el)
//   }
//   console.log(el)
// }

// console.log(vowelArray)
// const uniqueVowels = new Set(vowelArray)
// console.log(uniqueVowels)
// console.log(uniqueVowels.size)

const numberOfVowels = function (sentence) {
  const result = sentence.split('.')[0].split(' ').join('')

  const vowelArray = []
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (el of result) {
    if (vowels.includes(el)) {
      vowelArray.push(el)
    }
  }

  const uniqueVowels = new Set(vowelArray)
  // console.log(uniqueVowels)
  // console.log(uniqueVowels.size)

  return `Number of vowels: ${uniqueVowels.size}`
}

console.log(numberOfVowels('welcome to javascript.'))
console.log(numberOfVowels('Great is thy faithfulness'))
