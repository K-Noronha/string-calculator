const Add = require("./stringCalculator")

let sampleCases = [
  {
    name: "1.b) Empty String",
    string: "",
  },
  {
    name: "1.d) Simple String",
    string: "1,2,5",
  },
  {
    name: "2.a) Handle new lines",
    string: "1\n,2,3",
  },
  {
    name: "2.b) Handle new lines",
    string: "1,2\n,4",
  },
  {
    name: "3.c) Custom Delimiter",
    string: "//;\n1;3;4",
  },
  {
    name: "3.e.i) Custom Delimiter",
    string: "//$\n1$2$3",
  },
  {
    name: "3.e.ii) Custom Delimiter",
    string: "//@\n2@3@8",
  },

  {
    name: "BONUS 1) Numbers Larger Than 1000",
    string: "2,1001",
  },
  {
    name: "BONUS 2) Delimiters Arbitrary Length",
    string: "//***\n1***2***3",
  },
  {
    name: "BONUS 3) Multiple Delimiters",
    string: "//$,@\n1$2@3",
  },
  {
    name: "BONUS 4) Multiple Delimiters of Arbitrary Length",
    string: "//$$,@\n1$$2@3",
  },

  /* Negatives will throw an exception
   */
  {
    name: "4) Negative Numbers (throws an exception)",
    string: "1,-2,5,-6",
  },
]

sampleCases.forEach((x) => {
  console.log(
    `${x.name} 
      String: "${x.string.replace("\n", "\\n")}" 
      Result: ${Add(x.string)}  
      -----\n`
  )
})
