import inquirer from "inquirer";
let balance = 10000;
let pinNumber = 1234;
let pinAnswer = await inquirer.prompt(
  [
    {
      name:"pin",
      message :"Enter your pin here :",
      type :"number",
    }
  ]
)
if(pinAnswer.pin === pinNumber){
  console.log(`You have entered right code ! ${pinAnswer.pin}`);
   let operation_anwser = await inquirer.prompt(
    [
    {
      name:"operation",
      message:"Please select option",
      type:"list",
      choices:["Withdraw","check balance",]
    }
   ]
  );
  if(operation_anwser.operation === "Withdraw"){
    let Withdraw_amount = await inquirer.prompt([
      {
        name:"amount",
        message:"Enter your amount you wanna withdraw",
        type:"number"
      }
    ]);
    if(Withdraw_amount.amount<= balance){
      balance -= Withdraw_amount.amount;
      console.log(`Your remaining balance is :${balance}`)
    }
    else{
      console.log("You are trying to get more amount than you have in your account !");
    }
  }
  else if(operation_anwser.operation === "check balance"){
    console.log(`Your Total balance is ${balance}`);
  }
}
else{
  console.log("Again try ! You have enter wrong pin number");
}



// agar mainy 1000 nikal diyay hain to next time mujhy 9000 dikhain 
// dosra yeh kay jab yeh option aay kay ap ko kitnay paisy withdraw karny hain or 