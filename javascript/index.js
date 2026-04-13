const account = {
    accountName: "Junie",
    balance: 1000,

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

//account.deposit(1000);
//account.withdrawal(500);
//account.getBalance(0);
//account.getAccountName();
//account.exitAccount();

//ATM function
function atm() {
    const message = parseFloat(
        prompt("Select a choice: 1) Balance 2) Deposit 3) Withdraw 4) Name 5) Exit")
    );

    switch (message) {
        case 1:
            account.getBalance();
            break;

        case 2:
            let depositAmount = parseFloat(prompt("Enter amount to deposit"));
            if (isNaN(depositAmount) || depositAmount <= 0) {
                account.accountError("Invalid deposit amount");
            } else {
                account.deposit(depositAmount);
                account.getBalance();
            }
            break;

        case 3:
            let withdrawAmount = parseFloat(prompt("Enter amount to withdraw"));
            if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
                account.accountError("Invalid withdraw amount");
            } else {
                account.withdrawal(withdrawAmount);
                account.getBalance();
            }
            break;    

        case 4:
            account.getAccountName();
            break;

        case 5:
            account.exitAccount();
            break;

        default:
            account.accountError("Invalid choice");
    }
}
atm();

    