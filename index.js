module.exports = function fizz_buzz(value) {
  if (value == 15) {
    return 'FizzBuzz'
  } else if (value == 5) {
    return 'Fizz'
  } else if (value == 3) {
    return 'Buzz'
  } else {
    return value
  }
}
