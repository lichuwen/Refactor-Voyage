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

employeeTest('employee test-toString.', t => {
    const expect = "karen (engineer)";
    const result = new Employee("karen","engineer");
    t.is(expect, result.toString());
});
