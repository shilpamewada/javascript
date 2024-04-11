// Define the Employee class
class Employee {
    constructor(empid, empname, empaddress,emproject,emsalary) {
        this.empid = empid;
        this.empname = empname;
        this.empaddress = empaddress;
        this.emproject = emproject;
        this.emsalary = emsalary;
    }
}

// Create an instance of the Employee class
const employee1 = new Employee(1, 'John Doe', '123 Main Street',"hotel project" , 30000);

// Accessing the values
console.log('Employee ID:', employee1.empid);
console.log('Employee Name:', employee1.empname);
console.log('Employee Address:', employee1.empaddress);
console.log('Employee Project:', employee1.emproject);
console.log('Employee Salary:', employee1.emsalary);