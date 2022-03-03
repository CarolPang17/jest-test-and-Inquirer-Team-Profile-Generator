const Engineer = require("../lib/Engineer");

test("GitHub account office number should has set successfully by using constructor from Employee.js", () => {
  const testGitHubValue = "SophieGitHub";
  const newEmployeeA = new Engineer("Sophie", 16, "12345Sophie@testEmail.com", testGitHubValue);
  expect(newEmployeeA.github).toBe(testGitHubValue);
});
