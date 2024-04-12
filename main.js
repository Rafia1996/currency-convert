#! /usr/bin/env node
import inquirer from "inquirer";
let exchange_rate = {
    "USD $": 1, // United States (Dollor)  // Base currency
    "EUR £": 0.88, // European (Euro)
    "JPY ¥": 113.32, // Japanese (Yen)
    "CAD $": 1.29, // Canadian (Dollar)
    "AUD $": 1.44, // Australian (Dollar)
    "PKR Rs": 277.70, // Pakistani (Rupee)
};
// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency you want to convert from:",
        choices: ["USD $", "EUR £", "JPY ¥", "CAD $", "AUD $", "PKR Rs"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency you want to convert into:",
        choices: ["USD $", "EUR £", "JPY ¥", "CAD $", "AUD $", "PKR Rs"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount you want to convert:",
    }
]);
// Perform currency conversions
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount; // USD Base Currency //
let converted_amount = base_amount * to_amount;
console.log(`convert ammount is:${converted_amount.toFixed(2)}`);
