/* Interview perspective // in documentation there are only two type od data types are there 
( on the basic of how data are keept in memmory )

A) primitive => 7 categories
1) String ( innka refference nai diya jata hai majorly copy kara ka diya jata hai  and changes are majorly done in copy ) 
2) Number
3) Boolean
4) null  => null ka matalab zero nai hai ( null ka matalab EMPTY hota hai )
5) undefined  => isma variable declare kar diya hai , memory space bhi define kar diya hai BUT isma kaiya value dalna hai oo abhi define naihi hai  
5) Symbols  => use to create something unique 
6) BigInt => big values or sintific value jo normally int number etc  ma cover nai hota hai usa define karna ka liya use BigInt ka use karta hai 
eg: - const bigNumber = 123456778902134567n
 
7) *****IMPORTANT :-  Javascript is dynamically typed language hai ya statically typed language hai  


B) non-primitive / refference type  =>  ya ooo data type hai jiska reffernce value directly provide kar sakta hai 
 
=> Array :- 
=>  objects ( if you want to master javascript master Objects and browser event ka master kar lo ) :-
=> Function :-
*/

const heros = [ " ram" , " shaiyam " , " ravi"];
let myObj = {
    name : " Rupesh sahu ",
    age : 22 ,
}

const Function = function(){
    //console.log( "Hello world ");
}

console.log( typeof outsideTemp );

// -------------------INTERVIEW QUEASTION -------------------------------
// **** imp ---> jitna bhi non primitive data type hai  object hi ata hai 

/*  typeof of operator kaiya kaiya value dega jis bhi jata tyype ka dekhanga 

undefined => " undefined"
Null => "Object"
Boolena => " boolean "
Number => " number "
String => " string "
Object ( native and does not implemet [[call]]) => " object"
Object ( native or host and does implement [[ call]]) => " function "
Object ( host and does not implement [[call]]) => implementation- defined expected  may not be " undefiend", " boolena ", "number , or " string" 



*/

// link for documentation : https://262.ecma-international.org/5.1/#sec-11.4.3

//................... MEMORY..................

/* thre are two type of memory 
1) stack memory  -> majorly use in (PRIMITIVE DATA TYPE ) -> Here we get COPY of data 
2) heap memory   -> majorly use in ( NON-PRMITIVE DATA TYPE ) -> HERE we get REFERENCE of original value and the changes will be done in original value 


*/

let myYoutubename  = " Developerjourney rk "
let anothername = myYoutubename
console.log(anothername);

