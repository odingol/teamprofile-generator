const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("object should set office number given the constructor parameter", () => {
    const test = 2;
    const newManager = new Manager("George", 1, "test@test.com", test);
    expect(newManager.officeNumber).toBe(test);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const role = "Manager";
    const newManager = new Manager("George", 1, "test@test.com", 2);
    expect(newManager.getRole()).toBe(role);
  });
  
  test("should receive the office number using getOfficeNumber()", () => {
    const test = 2;
    const newManager = new Manager("George", 1, "test@test.com", test);
    expect(newManager.getOfficeNumber()).toBe(test);
  });

