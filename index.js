let balance = 500.00;

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

}

class Deposit extends Transaction {

  commit() {
    this.account.balance += this.amount;
  }

}

class Withdrawal extends Transaction {

  commit() {
    this.account.balance -= this.amount;
  }

}
class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

let t1 = new Withdrawal(50.25, myAccount);
t1.commit();

console.log('Balance:', balance);
