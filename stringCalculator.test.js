const Add = require("./stringCalculator")

test("empty strings returns 0", () => {
  expect(Add("")).toBe(0)
  expect(Add("+")).toBe(0)
})

test("simple string calculator", () => {
  expect(Add("1,2,5")).toBe(8)
})

test("handles new line", () => {
  expect(Add("1\n,2,3")).toBe(6)
  expect(Add("1,\n2,4")).toBe(7)
})

test("supports custom delimiter", () => {
  expect(Add("//;\n1;3;4")).toBe(8)
  expect(Add("//$\n1$2$3")).toBe(6)
  expect(Add("//@\n2@3@8")).toBe(13)
})

test("negative numbers should throw an exception", () => {
  expect(() => Add("1,2,-3")).toThrow("Negatives not allowed: -3")
  expect(() => Add("1,-5,-3")).toThrow("Negatives not allowed: -5,-3")
})

//Bonus
test("numbers larger than 1000 should be ignored", () => {
  expect(Add("2,1001")).toBe(2)
})

test("delimiters can be arbitrary length", () => {
  expect(Add("//***\n1***2***3")).toBe(6)
})

test("allow for multiple delimiters", () => {
  expect(Add("//$,@\n1$2@3")).toBe(6)
})

test("allow multiple delimiters of arbitary length", () => {
  expect(Add("//$$,@\n1$$2@3")).toBe(6)
})
