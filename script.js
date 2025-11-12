const maxDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let userDate = "10/02/2001"

function isValidDate(userDate) {
  const parts = userDate.split("/")
  const day = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10)
  const year = parseInt(parts[2], 10)

  if (day <= 0) {
    console.log("The date is incorrect")
    return
  }

  if (day <= maxDays[month]) {
    console.log("Date is ok")
    isPalindrome(userDate)
  } else {
    console.log("The date is incorrect")
    return
  }
}

function isPalindrome(userDate) {
  const date = userDate.replace(/\D/g, "")
  const reverseDate = date.split("").reverse().join("")

  if (date === reverseDate) {
    console.log("it's a palindrome")
    findNextPalindrome(userDate)
  } else {
    console.log("it's not a palindrome")
  }
}

function findNextPalindrome() {
  let nextDate = userDate
  nextDate++

  if (date === reverseDate) {
    console.log("it's a palindrome")
  } else {
    console.log("it's not a palindrome")
  }
}

isValidDate(userDate)
