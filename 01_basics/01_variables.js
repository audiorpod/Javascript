const accountId = 144553   // constant can be changed if it is assigned once 
let accountEmail = "rupeshsahu@gmail.com"
var accountPassword = " 123345"
accountCity = "Gumla"  // varible can be declared in this way also but it is not CORRECT to use in this type  

let accountState;   
 /*
 here we had not define any value lets see what output we get 
 if we dont define the value  JAVASCRIPT READ AS UNDEFINE WHILE PROVIDING OUTPIT 
*/

// accountId = 2  // not allowed 

accountEmail = "rk@gmail.com" 
accountPassword = " 644652"
accountCity = "Bengaluru"
 
console.log(accountId);      
// if we have to print all the sets above email, pass, city etc we have to define again and again console log();

/*
prefer not to use var 
bec of ishu in block scope and funcional scope 
*/

// another method to print in one sho all the other 

console.table([accountEmail,accountPassword,accountCity,accountState]);