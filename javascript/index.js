const account = {
    accountName: "Junie",
    balance: 0,

    getBalance() {
        console.log("Balance: " + this.balance);
    },

    deposit(amount) {
        this.balance += amount;
        console.log("deposit: " + amount);
    },

    withdrawal(amount) {
        if (amount > this.balance) {
            this.accountError("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log("withdraw: " + amount);
        }
    },

    getAccountName() {
        console.log("Account Name: " + this.accountName);
    },

    accountError(message) {
        console.log("Error: " + message);
    },
    exitAccount() {
        console.log("Exiting account...")
    }
};

account.deposit(400);
account.withdrawal(500);
account.getBalance(0);
account.getAccountName();
account.exitAccount();
