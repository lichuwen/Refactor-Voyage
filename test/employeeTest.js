const employeeTest = require('ava');
const { Employee } = require('../src/employee');

employeeTest('employee test-validateType. Employee with unknown type.', t => {
    const expect = "Employee cannot be of type student";
    try{
        new Employee("karen","student");
        t.fail();
    }catch (e) {
        t.is(e.message, expect);
    }
});