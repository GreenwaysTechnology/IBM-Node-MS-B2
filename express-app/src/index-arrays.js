


//array declarations

//simple values

const numList = [1, 2, 3, 4, 5, 6];

//iterate
//for...loop
for (let i = 0; i < numList.length; i++) {
    console.log(numList[i]);
}
//iterator
numList.forEach((i, index) => console.log(i));

//List of Customers
const customers = [
    { id: 1, name: 'a1' },
    { id: 2, name: 'a2' },
    { id: 3, name: 'a3' },
    { id: 4, name: 'a4' },
    { id: 5, name: 'a5' },
    { id: 6, name: 'a6' },
];
customers.forEach((customer, index) => console.log(`${customer.id} ${customer.name} `));

//JSON PARSING
const customerStr= JSON.stringify(customers);
console.log(customerStr)
console.log(JSON.parse(customerStr));