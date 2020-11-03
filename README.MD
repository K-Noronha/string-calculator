# String Calculator

## Instructions:

- To display the output of sample cases run "npm start" or "node index.js"

- To run the unit tests run:
  - "npm install" - for the test dependencies
  - "npm test"

---

## The String Calculator

The "Add" function in the stringCalculator.js file accepts a string of numbers and returns an interger of the sum of the numbers.

If the string is empty it will return 0.

Input strings with the format "//[delimiter]\n[delimiter separated numbers]" will allow for custom delimiters. These can be of arbitrary length and/or mulitple types separated by a ",".

Negative numbers in the string will throw an exception with a list of the negative numbers.

Numbers larger than 1000 in the string will be ignored.
