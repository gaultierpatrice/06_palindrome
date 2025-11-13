const maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function isValidDate(userDate) {
  // First, check if the string matches dd/mm/yyyy pattern
  const datePattern = /^\d{2}\/\d{2}\/\d{4}$/
  if (!datePattern.test(userDate)) {
    console.log("Not a valid date format (dd/mm/yyyy)")
    return false
  }
  const [day, month] = userDate.split("/").map(Number)
  if (day <= 0 || day > maxDays[month - 1]) {
    console.log("Invalid date")
    return false
  }
  console.log("Date is ok")
  return true
}

function isPalindrome(userInput) {
  const str = userInput.toLowerCase().replace(/[^a-z0-9]/g, "")
  const reversed = str.split("").reverse().join("")
  return str === reversed && str.length > 0
}

function findNextPalindrome(palindromeToFind, currentDate) {
  if (!Number.isInteger(palindromeToFind) || palindromeToFind <= 0) {
    console.log("Please enter a valid positive number.")
    return
  }

  const found = []
  let [day, month, year] = currentDate.split("/").map(Number)

  while (found.length < palindromeToFind) {
    const date = new Date(year, month - 1, day)
    date.setDate(date.getDate() + 1)

    const newDateStr = `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`

    if (isPalindrome(newDateStr)) {
      found.push(newDateStr)
    }

    // update date parts for next loop
    ;[day, month, year] = newDateStr.split("/").map(Number)
  }

  console.log("Next Palindromes:", found)
  return found
}

// ---- Example usage ----
const userDate = prompt(
  "Enter a date (dd/mm/yyyy) or any string to check for palindrome:"
)

console.log("User Input is :", userDate)

// First check if input is a date
if (isValidDate(userDate)) {
  // Only ask for number of palindromes if it's a valid date
  const palindromeCount = parseInt(prompt("How many next palindromes?"), 10)
  findNextPalindrome(palindromeCount, userDate)
} else {
  // For strings or invalid dates, just check if it's a palindrome
  if (isPalindrome(userDate)) {
    console.log("The string is a palindrome!")
  } else {
    console.log("The string is not a palindrome.")
  }
}
