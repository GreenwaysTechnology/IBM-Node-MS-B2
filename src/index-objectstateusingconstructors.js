//Object template : class :es 5
function Employee(id = 1, firstName = 'Subramanian', lastName = 'Murugan') {
    //instance variables
    this.id = id;
    this.firstName = firstName
    this.lastName = lastName
    //instance methods
    this.calculateSalary = function () {
        return 1000;
    };
}

//object creation

let emp = new Employee(1, 'Subramanian', 'Murugan');

//access object properties:variables and methods
console.log(`Id ${emp.id}`);
console.log(`Name ${emp.firstName} ${emp.lastName}`);
console.log(`Salary ${emp.calculateSalary()}`);

class Customer {
    //instance variables
    constructor(id = 1, firstName = 'Subramanian', lastName = 'Murugan') {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName
    }

    //methods
    calculateInvoice() {
        return 1000
    }
    calculateGST = () => 1000;
}
let cust = new Customer(1, 'Subramanian', 'Murugan');
//access object properties:variables and methods
console.log(`Id ${cust.id}`);
console.log(`Name ${cust.firstName} ${cust.lastName}`);
console.log(`Invoice ${cust.calculateInvoice()} ${cust.calculateGST()}`)

