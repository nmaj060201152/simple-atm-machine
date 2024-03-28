#! /usr/bin/env node
// SHABANG
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pinAnswer",
        message: "Enter your pin...",
        type: "number",
    },
]);
if (pinAnswer.pinAnswer === myPin) {
    console.log("Correct Pin Code....");
}
else {
    console.log("Incorrect Pin Code....");
}
let operationAns = await inquirer.prompt([
    {
        name: "operationAns",
        message: "Please select option....",
        type: "list",
        choices: ["withdraw", "check Balance"],
    },
]);
if (operationAns.operationAns === "check Balance") {
    console.log("Your current balance is " + myBalance);
}
else if (operationAns.operationAns === "withdraw") {
    let withdrawMethod = await inquirer.prompt([
        {
            name: "withdrawMethod",
            message: "Please select option....",
            type: "list",
            choices: ["enterAmount", "fastCash"],
        },
    ]);
    if (withdrawMethod.withdrawMethod === "fastCash") {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCashAmount",
                message: "Please select amount....",
                type: "list",
                choices: ["1000", "5000", "10000", "20000"],
            },
        ]);
        let amountAns = fastCashAmount.fastCashAmount;
        if (amountAns > myBalance) {
            console.log("You entered amount greater than your balance");
        }
        else if (amountAns <= myBalance) {
            let remainingBalance = myBalance - amountAns;
            console.log(`Your remaining balance is ${remainingBalance}`);
        }
    }
    else if (withdrawMethod.withdrawMethod === "enterAmount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amountAns",
                message: "Enter amount",
                type: "number",
            },
        ]);
        if (amountAns.amountAns > myBalance) {
            console.log("You entered amount greater than your balance");
        }
        else if (amountAns.amountAns < myBalance) {
            let remainingBalance = myBalance - amountAns.amountAns;
            console.log(`Your remaining balance is ${remainingBalance}`);
        }
    }
}
