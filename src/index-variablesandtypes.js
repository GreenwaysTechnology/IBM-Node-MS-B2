//variables and types

var i = 10;
console.log("I " + i);
var firstName ="Subramanian";
var lastName ='Murugan';
console.log("Full Name is " + firstName + " " + lastName);
console.log("Full Name is " , firstName , " " , lastName);
//back tick : use case 1: for simplifiying string concation
console.log(`Full Name ${firstName} ${lastName} `);

//back tick : use case 2: multi line string literal
var htmlDoc = "<html>" +
              "<body>" +
              "<h1>Hello</h1>" + 
              "</body>"+
               "</html>";
console.log(htmlDoc)

var htmlnewDoc =`
   <html>
   <body>
   <h1>Hello</h1>
   </body>
   </html>
`;
console.log(htmlnewDoc)

//booleans
var isWorking =true;
var hasProject =false;

console.log(`isWorking ${isWorking}`);
console.log(`Has Project ${hasProject}`)

//undefined
var salary;
console.log(`The salary is ${salary}`);

//undefined * 100 =NaN
var totalSalary = salary * 100;
console.log(`Total salary is ${totalSalary}`);

//type conversion
var stockValue = "100";
var qty =10;
//implicit conversion  : conversion first and then computation
var totalStock = stockValue * qty;
//explicit conversion : through api
var totalStockValue = parseFloat(stockValue) * qty;
console.log(`Total Stock Value ${totalStock}`)
console.log(`Total Stock Value ${totalStockValue}`)

//while conversion , $ is special character so that NaN 
var wage ="$10"
var totalWage = wage * 100
console.log(`Total Wage Value ${totalWage}`)

//infinity
var avgStock =  1000/ 0;
console.log(`Avg Stock ${avgStock}`)


