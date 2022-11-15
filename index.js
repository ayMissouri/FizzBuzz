const args = process.argv
const number = args[2]

if (number % 3 === 0 && number % 5 != 0) {
    console.log('Fizz')
} else if (number % 5 === 0 && number % 3 != 0) {
    console.log('Buzz')
} else if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz')
} else {
    console.log(number)
}




for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 != 0) {
        console.log('Fizz')
    } else if (i % 5 === 0 && i % 3 != 0) {
     console.log('Buzz')
    } else if (i % 3 === 0 && i % 5 === 0) {
     console.log('FizzBuzz')
    } else {
     console.log(i)
    }
}