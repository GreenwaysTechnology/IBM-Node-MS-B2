

//using functions
/**function Product(pid = 'P001', name = 'Iphone') {
    this.pid = pid;
    this.name = name;
}
function Order(orderId = 'A001', product = new Product()) {
    this.orderId = orderId;
    //HAS-A
    this.product = product;
}**/
//using classes
class Product {
    constructor(pid = 'P001', name = 'Iphone') {
        this.pid = pid;
        this.name = name;
    }
}
class Order {
    constructor(orderId = 'A001', product = new Product()) {
        this.orderId = orderId;
        //HAS-A
        this.product = product;
    }
}
//create object with dependencies

let product = new Product();
let order = null;

order = new Order();
console.log(`OrderId ${order.orderId} ${order.product.pid} ${order.product.name}`)

order = new Order('B002', product);
console.log(`OrderId ${order.orderId} ${order.product.pid} ${order.product.name}`)

order = new Order('B002', new Product('P8880', 'Lenvo Think Pad'));
console.log(`OrderId ${order.orderId} ${order.product.pid} ${order.product.name}`)




//has-a with literal objects: nested object

let locationInfo = {
    country: {
        countryName: 'INdia',
        state: {
            stname: 'Tamil Name',
            district: {
                name: 'Coimbatore'
            }
        }
    }
}
console.log(locationInfo.country.state.district.name)