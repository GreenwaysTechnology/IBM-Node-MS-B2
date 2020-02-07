const { ServiceBroker } = require('moleculer');

//create Broker

const broker = new ServiceBroker();

//Exposing service
broker.createService({
    name: 'GreeterService',
    actions: {
        sayHello() {
            return 'Hello Molecular MicroService'
        },
        //method 2
        sayHai(ctx) {
            const { firstName, lastName } = ctx.params;
            //return `Hello ${ctx.params.name}`;
            return `Hai ${firstName} ${lastName}`
        },
        async sayGoodBye(ctx) {
            const { firstName, lastName } = ctx.params;
            const message = await ctx.call('GoodbyeService.sayGoodBye', { name: firstName + lastName });
            return message;
        }
    }
});

//Good Bye Service

broker.createService({
    name: 'GoodbyeService',
    actions: {
        sayGoodBye(ctx) {
            const { name } = ctx.params;
            return `GoodBye! Thank you ${name}`
        }
    }

})



//start broker
//way 1
// broker.start()
//     // Call service
//     .then(() => broker.call("GreeterService.sayHello"))
//     .then(res => console.log("Greetings ", res))
//     .catch(err => console.error(`Error occured! ${err.message}`));

//way 2 through repl env
broker.start();
//Start REPL mode.
broker.repl()

