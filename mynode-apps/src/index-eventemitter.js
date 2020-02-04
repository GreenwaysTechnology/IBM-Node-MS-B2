//event driven programming

const EventEmitter = require('events');

//eventEmitter Object
let events = new EventEmitter();

//Subscriber
events.on('wakeup', function (data) {
    console.log(`wake up signal got : ${data}`)
});

//Producer
events.emit('wakeup', 'Hello Good Evening');
events.emit('wakeup', 'Hello Getting late');

/////////////////////////////////////////////////////////////////////////////////////////

//make inventory as event driven
class Inventory extends EventEmitter {
    constructor() {
        super();

        //subscribe events
        this.on('increment', function (stock) {
            //biz logic
            console.log(`Stock has been incremented ${stock}`);
        })

        this.on('decrement', function (stock) {
            console.log(`Stock has been decremented ${stock}`);
        })

    }
    //biz methods
    incrementStock(stock = 1) {
        this.emit('increment', stock);
    }
    decrementStock(stock = 1) {
        this.emit('decrement', stock);
    }
}

let inv = new Inventory();
inv.incrementStock(100);
inv.decrementStock(10);