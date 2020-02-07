
const { ServiceBroker } = require("moleculer");

let broker = new ServiceBroker({
    transporter: "nats://localhost:4222",

    // retryPolicy: {
    //     enabled: true,
    //     retries: 5,
    //     delay: 100,
    //     maxDelay: 2000,
    //     factor: 2,
    //     check: err => err && !!err.retryable
    // }
});

broker.createService({
    name: "CalculatorService",
    // actions: {
    //     async add(ctx) {
    //         let { x, y } = ctx.params
    //         let result = await ctx.call('AdderService.add', { a: x, b: y });
    //         return `${result}`;
    //     },
    // }
    actions: {
        add: {
            fallback: (ctx, err) => 0,
            async handler(ctx) {
                let { x, y } = ctx.params
                const result = await ctx.call('AdderService.add', { a: x, b: y });
                return `${result}`
            }
        }
    }
});
broker.start();
//Start REPL mode.
broker.repl()
