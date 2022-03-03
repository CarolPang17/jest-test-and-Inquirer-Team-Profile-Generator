const Employee = require("../lib/Employee");

test("Employee profile shoule create when we execute new Employee() ", () => {
  const newEmployeeA = new Employee();
  expect(typeof(newEmployeeA)).toBe("object");
});

test("name should has set successfully by using constructor from Employee.js", () => {
  const name = "Mika";
  const newEmployeeA = new Employee(name);
  expect(newEmployeeA.name).toBe(name);
});

test("id should has set successfully by using constructor from Employee.js", () => {
  const testId = 53;
  const newEmployeeA = new Employee("Anthony", testId);
  expect(newEmployeeA.id).toBe(testId);
});

test("email should has set successfully by using constructor from Employee.js", () => {
  const testEmail = "12345Kevin@testEmail.com";
  const newEmployeeA = new Employee("Kevin", 78, testEmail);
  expect(newEmployeeA.email).toBe(testEmail);
});

test("office number should has set successfully by using constructor from Employee.js", () => {
  const testOfficeNumber = 123456789000;
  const newEmployeeA = new Employee("Nate", 64, "12345Nate@testEmail.com", testOfficeNumber);
  expect(newEmployeeA.officeNumber).toBe(testOfficeNumber);
});

