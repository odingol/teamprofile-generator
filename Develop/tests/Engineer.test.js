const Engineer = require('../lib/Engineer');


  test("should set GitHub account given the constructor parameter", () => {
    const github = "username";
    const newEngineer  = new Engineer("Lyla", 1, "test@test.com", github);
    expect(newEngineer.github).toBe(github);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const role = "Engineer";
    const newEngineer = new Engineer("Lyla", 1, "test@test.com", "githubUserName");
    expect(newEngineer.getRole()).toBe(role);
  });
  
  test("Can get GitHub username via getGitHub()", () => {
    const githubTest = "GitHubUserName";
    const newEngineer = new Engineer("Lyla", 1, "test@test.com", githubTest);
    expect(newEngineer.getGitHub()).toBe(githubTest);
  });
