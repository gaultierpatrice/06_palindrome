const maxDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let userDate = "31/08/1951"

function isValidDate() {
  const parts = userDate.split("/")
  const day = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10)

  console.log(month)

  if (day <= maxDays[month]) {
    console.log("Date is ok")
  } else {
    console.log("Bad Date")
  }
}

isValidDate(userDate)
