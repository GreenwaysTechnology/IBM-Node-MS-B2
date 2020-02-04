//Adding new property during runtime.

// function Employee(){
//   this.id =1;
// }
// let emp = new Employee();

let emp = {
    id:1
}

//Add new property
emp.name = 'Subramanian'
emp.salary =9000;

//update existing property
emp.name = 'Ram'

//delete existing property
delete emp.salary

//iterate
for (const key in emp) {
   console.log(key,emp[key])
}

console.log(emp);

//Empty object
let map = {};
console.log(map);
map.lat =1999.89
console.log(map);