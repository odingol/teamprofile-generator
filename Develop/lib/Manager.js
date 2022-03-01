const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officenumber = officeNumber;
        this.role = "Manager";
    };
    getOfficeNumber() {
        return this.officenumber;
    };
    getRole() {
        return this.role;
    };
};

module.exports = Manager;