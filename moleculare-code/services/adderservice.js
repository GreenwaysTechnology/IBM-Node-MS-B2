
const { ServiceBroker } = require("moleculer");

let broker = new ServiceBroker({
    transporter: "nats://localhost:4222",
    //nodeID : 'IBM-ADDER-SERVER',
    registry: {
        strategy: "Random",
    }
});

broker.createService({
    name: "AdderService",
    actions: {
        add(ctx) {
            const { a, b } = ctx.params;
            return `${parseInt(a) + parseInt(b)} is from ${broker.nodeID} `;
        }
    }
     
});

broker.start();
//Start REPL mode.
broker.repl()
