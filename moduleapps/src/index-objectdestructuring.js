//object destructuring : breaking the object properties


// function getEmployee(emp) {

//     const { id, name, salary, department } = emp;

//     //console.log(`Id ${emp.id} name : ${emp.name} salary ${emp.salary} ${emp.department}`)
//     console.log(`Id ${id} name : ${name} salary ${salary} ${department}`)
// }

// const getEmployee = emp => {
//     const { id, name, salary, department } = emp;
//     console.log(`Id ${id} name : ${name} salary ${salary} ${department}`)
// }
const getEmployee = ({ id, name, salary, department }) => 
 console.log(`Id ${id} name : ${name} salary ${salary} ${department}`)


getEmployee({
    id: 1,
    name: 'Subramanian',
    salary: 2000,
    department: 'Training'
});