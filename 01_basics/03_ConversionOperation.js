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
console.log(boolenisLoggedIn);

// 1=> true ; 0 => false 
// " " => false 
// " rupesh " => true 

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);