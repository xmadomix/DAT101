"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const AccountType = {
  Normal: "Brukskonto",
  Saving: "sparekonto",
  Credit: "kreditkonto",
  Pension: "pensionkonto"
};

printOut(Object.values(AccountType).join(', '));
//printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount1 {
  #type;

  constructor(aType) {
    this.#type = aType;
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    printOut(`Account is changed from ${this.#type} to ${aType}`);
    this.#type = aType;
  }
}

const myAccount = new TAccount1("Brukskonto");
printOut(`myAccount=${myAccount.toString()}`);
myAccount.setType("Sparekonto");
printOut(`myAccount=${myAccount.toString()}`);
//printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount2WithBalance {
  #type;
  #balance;

  constructor(aType, aBalance = 0) {
    this.#type = aType;
    this.#balance = aBalance;
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    printOut(`Account is changed from ${this.#type} to ${aType}`);
    this.#type = aType;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(aAmount) {
    this.#balance += aAmount;
    printOut(`Deposit of ${aAmount}, new balance is ${this.#balance}`);
  }

  withdraw(aAmount) {
    if (this.#balance >= aAmount) {
      this.#balance -= aAmount;
      printOut(`Withdrawal of ${aAmount}, new balance is ${this.#balance}`);
    } else {
      printOut("Insufficient funds for withdrawal");
    }
  }
}

const myAccountWithBalance = new TAccount2WithBalance("Brukskonto");
printOut(`myAccount=${myAccountWithBalance.toString()}`);
myAccountWithBalance.deposit(100);
myAccountWithBalance.withdraw(25);
printOut(`My account balance is ${myAccountWithBalance.getBalance()}`);
//printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount3WithLimits {
  #type;
  #balance;
  #withdrawCount;

  constructor(aType, aBalance = 100) {
    this.#type = aType;
    this.#balance = aBalance;
    this.#withdrawCount = 0;
  }

  toString() {
    return `Account Type: ${this.#type}, Balance: ${this.#balance}`;
  }

  setType(aType) {
    this.#type = aType;
    this.#withdrawCount = 0;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(aAmount) {
    this.#balance += aAmount;
    this.#withdrawCount = 0;
    printOut(`Deposit of ${aAmount}, new balance is ${this.#balance}`);
  }

  withdraw(aAmount) {
    switch (this.#type) {
      case "Saving":
        if (this.#withdrawCount < 3) {
          if (this.#balance >= aAmount) {
            this.#balance -= aAmount;
            this.#withdrawCount++;
            printOut(`Withdrawal of ${aAmount}, new balance is ${this.#balance}`);
          } else {
            printOut("Insufficient funds!");
          }
        } else {
          printOut("You can't withdraw from a Saving account more than three times!");
        }
        break;

      case "Pension":
        printOut("You can't withdraw from a Pension account!");
        break;

      default:
        printOut("Invalid account type!");
    }
  }
}

const myLimitedAccount = new TAccount3WithLimits("Saving");
printOut(myLimitedAccount.toString());
myLimitedAccount.deposit(200);
myLimitedAccount.withdraw(50);
myLimitedAccount.withdraw(30);
myLimitedAccount.withdraw(20);
myLimitedAccount.withdraw(10);
//printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australienske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" },
};

class TAccount {
  #type;
  #balance;
  #withdrawCount;
  #currencyType;

  constructor(type = "Standard") {
    this.#type = type;
    this.#balance = 0;
    this.#withdrawCount = 0;
    this.#currencyType = "NOK";
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      printOut(`Deposit of ${amount}${CurrencyTypes[this.#currencyType].denomination}, new balance is ${this.#balance}${CurrencyTypes[this.#currencyType].denomination}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount;
      this.#withdrawCount++;
    }
  }

  getType() {
    return this.#type;
  }

  setType(newType) {
    if (newType) {
      this.#type = newType;
    }
  }

  setCurrencyType(newCurrencyType) {
    if (this.#currencyType === newCurrencyType) {
      return;
    }
    if (CurrencyTypes[newCurrencyType]) {
      this.#currencyType = newCurrencyType;
    }
  }

  toString() {
    return `Type: ${this.#type}, Balance: ${this.#balance}, Currency: ${this.#currencyType}`;
  }
}

const myAccount6 = new TAccount("Savings");
myAccount6.deposit(150);

/* Put your code below here!*/
//printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class Account7 {
  constructor(holder, balance, currency = "NOK") {
      this.holder = holder;
      this.balance = balance;
      this.currency = currency;
  }

  #currencyConvert(targetCurrency) {
      if (this.currency === "NOK" && targetCurrency === "SEK") {
          return this.balance * 1.0258;
      } else if (this.currency === "SEK" && targetCurrency === "USD") {
          return this.balance * 0.1067;
      } else if (this.currency === "USD" && targetCurrency === "NOK") {
          return this.balance * 9.146;
      }
  }

  changeCurrency(newCurrency) {
      const oldCurrencyName = CurrencyTypes[this.currency].name;
      const newBalance = this.#currencyConvert(newCurrency);
      this.balance = Number(newBalance.toFixed(2));
      this.currency = newCurrency;
      
      printOut(`The account currency has change from ${oldCurrencyName} to ${CurrencyTypes[newCurrency].name}`);
      printOut(`New balance is ${this.balance.toFixed(2)}${CurrencyTypes[newCurrency].denomination}`);
  }

  getBalance() {
      return this.balance.toFixed(2);
  }
}

const account7 = new Account7("John Doe", 150.00, "NOK");

account7.changeCurrency("SEK");
account7.changeCurrency("USD");
account7.changeCurrency("NOK");
//printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount7 {
  #type;
  #balance;
  #withdrawCount;
  #currencyType;

  constructor(type = "Standard") {
      this.#type = type;
      this.#balance = 0;
      this.#withdrawCount = 0;
      this.#currencyType = "NOK";
  }

  #currencyConvert(amount, fromCurrency, toCurrency) {
      
      if (fromCurrency === "USD" && this.#currencyType === "NOK") {
          return amount * 21.662;  
      } else if (fromCurrency === "GBP" && this.#currencyType === "NOK") {
          return amount * 11.806;  
      } else if (this.#currencyType === "NOK" && toCurrency === "CAD") {
          return amount * 0.1435;  
      } else if (this.#currencyType === "CAD" && toCurrency === "INR") {
          return amount * 5.4547;  
      } else if (fromCurrency === "SEK" && this.#currencyType === "INR") {
          return amount * 0.7397;  
      }
      return amount;
  }

  deposit(amount, currency = "NOK") {
      if (amount > 0) {
          const convertedAmount = this.#currencyConvert(amount, currency, this.#currencyType);
          this.#balance = Number(convertedAmount.toFixed(2));
          printOut(`Deposit of ${amount.toFixed(2)} ${currency}, new balance is ${this.#balance.toFixed(2)}${CurrencyTypes[this.#currencyType].denomination}`);
      }
  }

  withdraw(amount, currency = "NOK") {
      if (amount > 0) {
          const convertedAmount = this.#currencyConvert(amount, currency, this.#currencyType);
          if (this.#balance >= convertedAmount) {
              this.#balance = Number((this.#balance - convertedAmount).toFixed(2));
              printOut(`Withdrawal of ${amount.toFixed(2)} ${currency}, new balance is ${this.#balance.toFixed(2)}${CurrencyTypes[this.#currencyType].denomination}`);
              this.#withdrawCount++;
          }
      }
  }

  setCurrencyType(newCurrencyType) {
      if (this.#currencyType === newCurrencyType) {
          return;
      }
      if (CurrencyTypes[newCurrencyType]) {
          const oldCurrencyName = CurrencyTypes[this.#currencyType].name;
          const newBalance = this.#currencyConvert(this.#balance, this.#currencyType, newCurrencyType);
          this.#balance = Number(newBalance.toFixed(2));
          this.#currencyType = newCurrencyType;
          printOut(`The account currency has change from ${oldCurrencyName} to ${CurrencyTypes[newCurrencyType].name}`);
          printOut(`New balance is ${this.#balance.toFixed(2)}${CurrencyTypes[newCurrencyType].denomination}`);
      }
  }

  getBalance() {
      return this.#balance;
  }
}

//Teste koden i forhold til currency og riktig plassering på navn
const accounts = new TAccount7();
accounts.deposit(12.00, "USD");
accounts.withdraw(10.00, "GBP");
accounts.setCurrencyType("CAD");
accounts.setCurrencyType("INR"); 
accounts.withdraw(150.11, "SEK"); 

//printOut("Replace this with you answer!");
printOut(newLine);