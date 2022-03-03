const Intern = require("../lib/Intern");

test("school should has set successfully by using constructor from Intern.js", () => {
  const testSchool = "UW";
  const newEmployeeA = new Intern("Sophie", 16, "12345Sophie@testEmail.com", testSchool);
  expect(newEmployeeA.school).toBe(testSchool);
});
