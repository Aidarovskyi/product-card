// Задание 6

import { commentsNetwork } from './comments.js'


// Задание 2

const arrayNambers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray = arrayNambers.filter(number => number > 4)

console.log(newArray)

// Задание 3

const arrayMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const newMonths = arrayMonths.filter(month => month === 'March')

console.log(newMonths)

// Задание 4

const arrayReverse = (arrayNambers) => {
  return arrayNambers.reverse()
}

const arrayResult = arrayReverse(arrayNambers)

console.log(arrayResult)


const arrayReverse2 = (arrayMonths) => {
  return arrayMonths.reverse()
}

const arrayResult2 = arrayReverse2(arrayMonths)

console.log(arrayResult2)



// Задание 7

const commentsEmailCom = commentsNetwork.filter(comment => 
  comment.email.includes(".com")
)

console.log(commentsEmailCom)


// Задание 8

const getNewArray = commentsNetwork.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log(getNewArray)


// Задание 9

const arrayIdName = commentsNetwork.map(comment =>
  ({id : comment.id, name: comment.name})
)

console.log(arrayIdName)


// Задание 10

const addPropertyArray = commentsNetwork.map(comment =>
  ({...comment, isInvalid: 'ttt', isInvalid: comment.body.length > 180})
)

console.log(addPropertyArray)


// Задание 11

const emailWithMapArray = commentsNetwork.map(comment => comment.email)

console.log(emailWithMapArray)



const emailWithReduceArray = commentsNetwork.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []);

console.log(emailWithReduceArray) //Сделал с помощью нейронки


// Задание 12

const stringArray = emailWithMapArray.toString()

console.log(stringArray) 

const joinArray = emailWithMapArray.join()

console.log(joinArray) 


