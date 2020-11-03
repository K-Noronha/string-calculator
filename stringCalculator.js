const Add = (string) => {
  let delim = "," //default delim
  let sum = 0
  let negatives = []

  //if string begins with control code, set custom delim
  // code format: "//[delim]\n[delim separated numbers]"
  if (string.startsWith("//")) {
    delim = string.slice(2).split("\n", 1)
    delim = delim[0].split(",") //splits if mutliple delimiters
    string = string.substring(string.indexOf("\n") + 1) //extracts string without control code
  }

  //removes all new lines in the string
  string.replace("\n", "\\n")

  //splits string to array of numbers by delim
  if (delim.length === 1) {
    string = string.split(delim)
  } //if multiple delimiters
  else {
    delim.forEach((token) => {
      string = string.split(token).join()
    })
    string = string.split(",")
  }

  //adds the numbers in the string
  string.forEach((char) => {
    const num = Number(char) //converts char to number

    //checks for negative numbers
    if (num < 0) {
      negatives.push(num)
    }

    //ignores numbers larger than 1000
    else if (num < 1001) {
      sum += num
    }
  })

  //throws an exception if any negatives in the string
  if (negatives.length > 0) {
    throw `Negatives not allowed: ${negatives}`
  }

  return sum
}

module.exports = Add
