const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("office number should has set successfully by using constructor from Employee.js", () => {
  const testOfficeNumber = 123456789000;
  const newEmployeeA = new Manager("Nate", 64, "12345Nate@testEmail.com", testOfficeNumber);
  expect(newEmployeeA.officeNumber).toBe(testOfficeNumber);

});
