// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log( == 1);
// console.log(2 < 1);
// console.log(2 != 1);

//------------------ When we compare two different data type 

console.log( "2" > 1); // output = > true 
console.log( "02" > 1);  // output => true 

console.log(null > 0);  // output => false 
console.log(null == 0);  // output => false ( when we compare with null it converted null to into zero )

console.log(null >= 0);  /* output => true ( Here we get conversion proble so be carefull   )
 the resion is that an equality check == and comparisions > <>= <= work differently . 
 comparision convert null to a number, treating it as o . 
 that's why (3) null >= 0 is true and (1) null>o is false 
*/


console.log( undefined == 0);
console.log( undefined > 0);
console.log( undefined < 0);


// ALWAYS TRY TO AVOID THE  ABOVE TYPE OF CODE  AND TRY TO IMPLEMENT CLEAN CODE bec industry demand that 

// Strict check is done by === ( triple equal too also checks its data type also  )

console.log( "2" === 2 );


