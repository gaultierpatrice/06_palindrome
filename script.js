const maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let userDate = prompt(
  "Enter the date you want to check for a palindrome (format: dd/mm/yyyy):"
)

function isValidDate(userDate) {
  const [day, month] = userDate.split("/").map(Number)
  if (day <= 0 || day > maxDays[month - 1]) {
    console.log("Invalid date")
    return false
  }
  console.log("Date is ok")
  return true
}

function isPalindrome(userDate) {
  const date = userDate.replace(/\D/g, "")
  const reverseDate = date.split("").reverse().join("")
  return date === reverseDate
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

if (isValidDate(userDate)) {
  const palindromeCount = parseInt(prompt("How many next palindromes?"), 10)
  findNextPalindrome(palindromeCount, userDate)
}
