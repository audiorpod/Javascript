// let score = "33abc"

// console.log(typeof score);     // (output :> string)  hum is tara sa bhi likh sakta hai 
// console.log( typeof (score)); // output :> string).    peranthesis ka ander lakha hai to method type ban jata hai 

// let  valueInNumber = Number(score)  // passing score as number ( means converting to number )
// console.log(typeof valueInNumber ); // output :> number )
// console.log(valueInNumber);         // output :> NaN ( not a number )) 

//-----------------------------------------------------------------------------------------------

// let score = null

// console.log(typeof score);     // (output :> object )  hum is tara sa bhi likh sakta hai 
// console.log( typeof (score)); // output :> object ).    peranthesis ka ander lakha hai to method type ban jata hai 

// let  valueInNumber = Number(score)  // passing score as number ( means converting to number )
// console.log(typeof valueInNumber ); // output :> number )
// console.log(valueInNumber);         // output :>  0  ( not a number )) 

//-----------------------------------------------------------------------------------

// let score = undefined

// console.log(typeof score);     // (output :> Undefined )  hum is tara sa bhi likh sakta hai 
// console.log( typeof (score)); // output :> Undefined ).    peranthesis ka ander lakha hai to method type ban jata hai 

// let  valueInNumber = Number(score)  // passing score as number ( means converting to number )
// console.log(typeof valueInNumber ); // output :> number )
// console.log(valueInNumber);         // output :>  NaN  ( not a number )) 


//------------------------------------------------------------------------------


// let score = true

// console.log(typeof score);     // (output :> boolen )  hum is tara sa bhi likh sakta hai 
// console.log( typeof (score)); // output :> boolen ).    peranthesis ka ander lakha hai to method type ban jata hai 

// let  valueInNumber = Number(score)  // passing score as number ( means converting to number )
// console.log(typeof valueInNumber ); // output :> number )
// console.log(valueInNumber);         // output :>  1  ( not a number )) 


//-----------------------------------------------------------------------------------

// "33" => 33 
// "33abc" =>  NaN
// true => 1; false => 0 

let isLoggedIn = 1 

let boolenisLoggedIn  = Boolean(isLoggedIn)
//console.log(boolenisLoggedIn);

// 1=> true ; 0 => false 
// " " => false 
// " rupesh " => true 

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(typeof stringNumber);


// ******************OPERATION**********************************

let value  = 3 
let negValue = -value    // ( assigning a negative value it will provide -ve value  )
// console.log(negValue);

// console.log(2 + 2 );
// console.log(2 - 2 );
// console.log(2 * 2 );
// console.log(2 ** 3 );  // ( means 2 ki power 3 )
// console.log(2 / 2 );
// console.log(2 % 2 );   //( 2 is 3  reminder)

// some trick one 

let str1 = " rk"
let str2 = " ravi "
 let str3 = str1 + str2
//  console.log(str3);

// // taking a slightly complex one 

// console.log("1" + 2); // output = 12
// console.log(1 + "2");  // output =>12
// console.log("1" + 2 + 2);  // output =>  122
// console.log( 1+ 2 + "2");   // output => 32 

// console.log( 3 + 4 * 5 % 3 ); // dont write this type of code  it will be never be aacepted 
// console.log((3+4) *5 % 3 );   //  you can write in this way


console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2=num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// ------------------exploring through document  Mdn  postfix and prefix in javascript 
