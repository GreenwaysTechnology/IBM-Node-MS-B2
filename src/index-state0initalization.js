//Object template : class :es 5
function Employee() {
    //instance variables
    this.id = 1;
    this.firstName = 'Subramanian'
    this.lastName = 'Murugan'
    //instance methods
    this.calculateSalary = function () {
        return 1000;
    };
}

//object creation
let emp = new Employee();
//initalize the object properties after object creation

emp.id =100;
emp.firstName = 'Srisha'
emp.lastName = 'Subramanian';


//access object properties:variables and methods
console.log(`Id ${emp.id}`);
console.log(`Name ${emp.firstName} ${emp.lastName}`);
console.log(`Salary ${emp.calculateSalary()}`);

class Customer {
    //instance variables
    id = 1;
    firstName = 'Subramanian'
    lastName = 'Murugan'
    //methods
    calculateInvoice() {
        return 1000
    }
    calculateGST = () => 1000;
}
let cust = new Customer();

//initalize the object properties after object creation
cust.id =9999;
cust.firstName ='Ram';
//access object properties:variables and methods
console.log(`Id ${cust.id}`);
console.log(`Name ${cust.firstName} ${cust.lastName}`);
console.log(`Invoice ${cust.calculateInvoice()} ${cust.calculateGST()}`)

let product = {
    id: 1,
    name: 'Iphone',
    price: 10000,
    qty: 100,
    //methods
    calculateQty: function () {
        return 10 * 90;
    },
    calculateGST() {
        return 10;
    },
    calculateStock : () => 1000
};

console.log(`Product info`)
product.id =99999;
product.name ='Lenvo Think Pad',
product.qty =90;


console.log(`Id ${product.id}`);
console.log(`name ${product.name}`);
console.log(`price ${product.price}`);
console.log(`qty ${product.qty}`);
console.log(`Stock ${product.calculateStock()}`);