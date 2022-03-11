const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test("object should set the school parameter given the constructor parameter", () => {
    const school = "University of...";
    const newIntern = new Intern("name", 1, "test@test.com", school);
    expect(newIntern.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
    const role = "Intern";
    const newIntern = new Intern("Name", 1, "test@test.com", "school");
    expect(newIntern.getRole()).toBe(role);
  });
  
  test("Can get school via getSchool()", () => {
    const school = "Univerity of...";
    const newIntern = new Intern("Name", 1, "test@test.com", school);
    expect(newIntern.getSchool()).toBe(school);
  });