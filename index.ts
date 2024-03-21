#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
const answer = await inquirer.prompt([
{message:"Enter your first number :",type:"number",name:"firstNumber"},
{message:"Enter your second number :",type:"number",name:"SecondNumber"},
{message:"Choose operator :",type:"list",name:"operator",choices:["Addition","Substraction","Multiplication","Division"]}
]);
if(answer.operator === "Addition"){
    console.log(chalk.red(`${answer.firstNumber} + ${answer.SecondNumber} = ${answer.firstNumber+answer.SecondNumber}`));
    
}else if(answer.operator === "Substraction"){
    console.log(chalk.blue(`${answer.firstNumber} - ${answer.SecondNumber} = ${answer.firstNumber-answer.SecondNumber}`))
}else if(answer.operator === "Multiplication"){
    console.log(chalk.magenta(`${answer.firstNumber} * ${answer.SecondNumber} = ${answer.firstNumber*answer.SecondNumber}`))
}else if(answer.operator === "Division"){
    console.log(chalk.yellow(`${answer.firstNumber} / ${answer.SecondNumber} = ${answer.firstNumber/answer.SecondNumber}`))
}else{
    console.log("choose valid operator");
}
