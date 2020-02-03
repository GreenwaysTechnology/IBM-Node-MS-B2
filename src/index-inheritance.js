
class Account {
    constructor(accountId) {
        console.log('Account class')
        this.accountId = accountId;
    }
    withdraw(){
        console.log('withdraw in account')
    }
}
class SavingsAccount extends Account {
    constructor(accountId) {
        super(accountId)
        console.log('SavingsAccount class')
    }
    //Redefining: not overriding
    withdraw(){
        super.withdraw()
        console.log('withdraw in SavingsAccount')
    }
}

//object creation
let account = new SavingsAccount(233);
console.log(account.accountId)
account.withdraw();