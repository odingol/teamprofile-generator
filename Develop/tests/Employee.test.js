const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can assume object contains Employee info", () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee)).toBe("object");
    });


    it("should set a name given the constructor parameter", () => {
        const name = "George";
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toBe(name);
    });

    it("should set an id given the constructor parameter", () => {
        const id = "001";
        const newEmployee = new Employee("George", id);
        expect(newEmployee.id).toBe(id);
    });

    it("should set an email given the constructor parameter", () => {
        const email = "example@fakemail.com";
        const newEmployee = new Employee("George", 1, email);
        expect(newEmployee.email).toBe(email);
    });

    describe("getName()", () => {
        it("can receive the name using getName()", () => {
            const name = "Susan";
            const newEmployee = new Employee(name);
            expect(newEmployee.getName()).toBe(name);
        });
    });

    describe("getId()", () => {
        it("can receive the id using getId()", () => {
            const id = 100;
            const newEmployee = new Employee("Susan", id);
            expect(newEmployee.getId()).toBe(id);
        });
    });
        
    describe("getEmail()", () => {
        it("can receive the email using getEmail()", () => {
            const email = "test@test.com";
            const newEmployee = new Employee("Foo", 1, email);
            expect(newEmployee.getEmail()).toBe(email);
        });
    });
        
    describe("getRole()", () => {
        it("getRole() must return \"Employee\"", () => {
            const role = "Employee";
            const newEmployee = new Employee("George", 1, "randomname@test.com");
            expect(newEmployee.getRole()).toBe(role);
        });
    });

});



