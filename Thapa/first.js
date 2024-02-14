
//Introductory part

// console.log('Hello World');



/* Values and Variable */

/*
Discription:
 1 =  Variable first charater must be a letter or (_) or (&),  not any number:1 2 3 etc.
 2 =  space is not allowed.
 3 =  Variable names are case sensitive.(myAge |  myage).
 4 =  No limit for var name.
 5 =  Reseved words are not allowed.
*/
//Discription Practise
     //Valid
// var _myName='R A K';
// var _1my__Name='R A K';
// var $myName='R A K';

// console.log(_myName);
// console.log(_1my__Name);
// console.log($myName);


     //Wrong
// var 1myName='R A K';
// var myName%='R A K';

// console.log(1myName);
// console.log(myName%);




//Stop talking, Show me Code




// var text = 'i am '
// var myname = 'Rai Ahmad Khan';
// var myage = 'My Agr is 23';

// console.log(text);
// console.log(myname);
// console.log(myage);





/* Data Types In JavaScript */

//   Six Data Types     That Are Primitive(Primary/Original)
/*
Discription:
undefined: (typeof()) instance ==="undefined" which you haven't define by taking var
String   : (typeof()) instance ==="String" data within coluns
Number   : (typeof()) instance ==="Number" 1 2 3 etc
Boolean  : (typeof()) instance ==="Boolean" true fales
Bigint   : (typeof()) instance ==="Biglnt"
Symbol   : (typeof()) instance ==="Symbol"
null     
array
*/



//String
// var mynameis = 'Rai Ahmad Khan';

// console.log(typeof(mynameis));
// console.log(mynameis);

//Number
// var age = 26;

// console.log(typeof(age));
// console.log(age);

//Boolean
// var iamRaK = true;

// console.log(typeof(iamRaK));
// console.log(iamRaK);

// console.log(typeof(iamRaaK)); 




/* First Challenge*/

// var iamRaK = true + false;    //1

// console.log(typeof(iamRaK));
// console.log(iamRaK);


// var iamRaK = true + true;   //2

// console.log(typeof(iamRaK));
// console.log(iamRaK);


// var iamRaK = true - false;  //1

// console.log(typeof(iamRaK));
// console.log(iamRaK);


// var iamRaK = -true + true;

// console.log(typeof(iamRaK));
// console.log(iamRaK);

// var iamRaK = false - true;

// console.log(typeof(iamRaK));
// console.log(iamRaK);


// var iamRaK =  10 + "20";
// console.log(typeof(iamRaK));
// console.log(iamRaK);



// var iamRaK = 9 -"5"; //bug

// console.log(typeof(iamRaK));
// console.log(iamRaK);

//while add it returns String and in substration it returns Number 


// var iamRaK = " " + 0;

// console.log(typeof(iamRaK));
// console.log(iamRaK);


// var iamRaK = "R A " + "K";

// console.log(typeof(iamRaK));
// console.log(iamRaK);



/* Interview Question */


           //1st
// Difference between Null and Undefined?

//     //null    
// var ThisIsMyNull= null;  //2nd Bug In JavaScript
// console.log(ThisIsMyNull);
// console.log(typeof(ThisIsMyNull));

//     //Undefined
// var ThisIsMyUndefine; 
// console.log(ThisIsMyUndefine);
// console.log(typeof(ThisIsMyUndefine));


           //2nd
// What is NaN?
   // NaN is a property of the global object. 
   // In other words, it is a variable in global scope.
   // The intial value of NaN is Not-A-Number.


// var myNumber = "+9233431575704"; //while digits you can avoid coluns but it will not print "+".
// var mytext= "Hello Gee Kaise ho Saray";

//console.log(isNaN(myNumber));
// console.log(isNaN(mytext));


// if(isNaN(myNumber)){
//     console.log('Please Enter The Valid Number') // That is a true condtion.
// }
// else{
//     console.log(myNumber);
// }




// console.log(isNaN(mytext));

// if(isNaN(mytext)){
//     console.log('Entered Text Is not Valid') // That is a fales condition.
// }
// else{
//     console.log(mytext);
// }




// NaN===NaN;]]
// Number.NaN=== NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);


// console.log(NaN===NaN);
// console.log(Number.NaN=== NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

// // //Exeptional
// console.log(Number===isNaN);
// console.log(Number.NaN===isNaN);





           //3rd
           //Expressions And operators
//Expressions(The cobinition of operator and operand is called expression) And Operators(50/numbers:operand, +:operator)


/*
Assignment Operator
Arthimetic Operator 
Comparison Operator
Logical Operator
String Operator
Conditional (ternary) Operator */


/*
 //Assignment Operator

Assignment operator assign the value of its left operator based on the value of its right operator.
//"=" is a simple assignment operator.

*/

// var x =5;
// var y =5;

// console.log( "is the value of x and y is equal or not" +  x==y);


//The ameliorated thing and will be learning afterwards!
// console.log( 'is the value of x and y is equal or not : ${x==y}');



/*
Arthimetic Operator
An arthimatic operator takes numerical values (either literal or variables) as their 
operands and returns a single numerical value.
Arthematic operators are " - , + , * , / , % ".
 */

// console.log(3+3);
// console.log(3-4);
// console.log(4*5);
// console.log(15/5);

// console.log("The remainder Operator is " + 27%4);





/*

Comparison Operator
A comparison operator compare its operand and returns a logical value
based on weather the value is true or fales.

 */
/*
var a=30;
var b=40;


// Equal

console.log( a == b);

//Not Equal
console.log(a != b);

// Greater than or equal

console.log( a>b);

// less than Or not

console.log(a<b);

// Less then or Equal  to
console.log(a<=b);

// Greater than or Equal to

console.log(a>=b);

*/
/*
Logical Operator:
They are typically used with Boolean(logical) values and return a boolean value.
*/

// var a=60;
// var b=40;

//(1)Logical AND Operator (&&) 
//The logical AND operator (logical Conjuction) for a set of
//operands is true if and only if all its value are true: means "1".

//console.log(a>b && b> 0 && b<0);


//(2)Logical OR Operator (||)
// (LOgical Disjunction)It is true if and only if one or more of its operands is true.

//console.log(a>b || b>a || b<0);

//(3)Logical NOT (!)
//(Logical Complement )
// It takes truth to falsity and vice versa

// console.log(!(a>b || b>a || b>0));
// console.log(!false);



/*
String (Concatenation)Operator
The Concatenation Operator(+) concatenates two string values togather,
 returing an other string that is the union of the two operand strings.
*/
// console.log("Hello World, " + "this is Alpha!");

//var sirName= "Khan";
//console.log("Rai Ahmad "+ sirName);
//console.log("Rai M."+ sirName);

/* 
Conditional (ternary) Operator */

// is defined below









/*
Challenge Time

What will be the output of 3**3?
What will be the output of, when we add a Number and a string?
Write a program to swap two numbers?
Write a program to swap two numbers without using third variable?
*/

//solution 1
// console.log(9**2); // its 9*9
// console.log(10**-1); // its (1/10)
// //It is called Exponentiation Operator(**3)

//Solution 2

// console.log(5+"Rai");
// //Problem comes when you do Minus(-)
// console.log(5-"Rai");

//Solution 3

// var a=3;
// var b=4;

// // //output b=4; a=3;

// var c=b; // c=4;
// b=a; // b=3;
// a=c; //a=4;

// console.log("Value of a after swap is " +a);
// console.log("Value of b after swap is " +b);


//Solution 4


// var a=3;
// var b=4;

// //output b=4; a=3;

// a=a+b; //a=7;
// b=a-b; //b=3;
// a=a-b;// a=4;

// console.log("Value of a after swap is " + a);
// console.log("Value of b after swap is " + b);



/*Interview Question

What is the difference between == and ===*/

//Answer: == checks value only where as === checks value and data type.




// var a=4;
// var b='4';
// // console.log(typeof(a));
// // console.log(typeof(b));
// // console.log(b);


// //checks value only
// console.log(a==b);
// //value and data type also
// console.log(a===b);



/*

^Control Statement & Loops^

1:if..else
2:Switch statement
3:while loop
4:Do-while loop
5:for loop
//two extra in jawaScript
6:for in loop
7:for of loop
8:conditonal (ternary) operator
*/






//if..else






//1: The if statement executes a statment if a specified condition is true
//   if the condition is false, another staement can be executed.


// var tommorow= 'rain';

// if (tommorow == 'rain'){
//     console.log('Take an umbrailla');
// }else{
//     console.log('Don,t take an umbrailla');
// }


// var tommorow= 'sunny';

// if (tommorow == 'rain'){
//     console.log('Take an umbrailla');
// }else{
//     console.log('Don,t take an umbrailla');
// }


/*Challange Time
Write a program that works out whether if a given year is a leap year
or not */
// leap is a year having 366 days, with an extra day of 29th feb.

//Program For Leap Year

// var year=2024;
//// debugger //is used for testing purpose, we write it in console by inspect.


// if (year% 4==0) {
// if(year %100==0) {
// if(year %400==0)] {
//     console.log('The year of ' +year+ " is a leap year.");
// }else {
//     console.log('The year of ' +year+ " is not a leap year.");
// }
// }else {
//     console.log('The year of ' +year+ " is a leap year.");
// }
// }
// else /{
//     console.log('The year of ' +year+ " is not a leap year.");
// }



//challenge Time is Still Here

//What are truthy and falsy values in JawaScsript?
// 0,"",null,undefined and NaN are the 5 falsy values in JawaScript. false is always false


// if(Score==0)
// {
//     console.log('Hurrah, We won the match');
// }else{
//     console.log('Alas, We lost the match');
// }





//Conditional (ternary) Operator
// It is the only operator in jawaScript that takes three operands.
//it is basically the short-hand part of if..else condition

//var age;                    (age >18)     if true
//variablename =              (condition)? value1  :   value2
 //                                                     if false



//  var age =19;
//  if (age>=18){
//      console.log("voter is eligible to vote");
//  }else{
//      console.log("voter is not elibible to vote");
//  }
//  //Its short-hand is
// var age=33;
// //(age>=18)? "Eligible": "Not Eligible";
// console.log((age>=18)? "Eligible": "Not Eligible");







//Switch statement

//Evaluate an Expression, matching the expression's value to a 
// case clause, and execute statments associated with that case.

//1st without breark statment 
//Find the area of circle, triangle and rectangle?

// var area='circle';
// var PI=3.142, l=5, b=5, r=3;
// if (area=='circle'){
// console.log('The area of the circle is '+ PI*r**2);
// }else if(area=='triangle'){
//     console.log('The area of the triangle is '+ 1/2* (b * l));
// }else if(area=='rectangle'){
//     console.log('The area of the rectangle is '+ (l*b));
// }else{
//     console.log('Enter the valid value here');
// }


// var area='rectangle';
// var PI=3.142, l=5, b=5, r=3;
// switch(area){
// case 'circle':
//     console.log('The area of the circle is '+ PI*r**2);
//     break;
// case 'triangle':
//     console.log('The area of the triangle is '+ 1/2* (b * l));
//     break;
// case 'rectangle':
//     console.log('The area of the rectangle is '+ (b * l));
//     break;
// default:
//     console.log('Enter the valid value here');
// }


//Break;
// It terminate the current loop, switch, and lable
// statemnet and transfers program control to the
// statement following the terminated statement.



//          While loop statement
// The while loop creartes a loop that executes a specified statement
// as long as the test condition evaluates to true.


// var number=0;
// //Block Scope within { }
// while(number<=9){
//     console.log(number); //till here the will run infinite time, so we have to add an increment.
//     number++;
// }



//Do-while Loop Statement

// It prints the value at least for one time and the checkes the value.

// var number=10;
// do {
//     debugger
//     console.log(number);          //till here the will run infinite time, so we have to add an increment.
//     number++;
//  }while(number<=9);



//For Loop
// its syntax =for(initializer; condition; iteration)
//                 {// code to be executed }


// for(var number1=9;number1>=0; number1--){
//     console.log(number1);
// }




//Challange Time
//write a JavaScript program to print a table for the given Numbers



// for(var tableOf=8, num=1; num<=10; num++){
// console.log(tableOf+" * "+ num+ " = " + tableOf*num);
// }


//Thapa did it in this way

// for( num=1; num<=10; num++){
//     var tableOf=8
//     console.log(tableOf+" * "+ num+ " = " + tableOf*num);
//     }





//Functions in JavaScript

/*
Functions Definition
Calling a Function
Function Parameter
Function Arguments
Functions Expression
Return Key Word
Anonymous Function


Definition: A block of code designed to perform a perticullar task repeatedly.

 Before using a function, we need to define it.
 A function definition : function's statement/declaration, consist of the function's
 keyword,followed by:

 //The name of function.
 A list of parameters to the  function, enclosed in paren-theses and separated by commas.
 The JavaScript statements that define the  function, enclosed in curly brackets,{...}.
*/

//syntax= function functionName()
//                   { //Statement}


// var a=20, b=20;
// var sum=a+b;
// console.log(sum);





// function sum(){
//     var a=20, b=20;
//     var total=a+b;
//     console.log(total);
// }

// //Calling Functions
// //Just defining a function does not execute it.
// //A JavaScript fuction only executed when "something" invokes it(call it).


// sum();  //here we go




//Challange Time

//What is the difference between funnction parameters and functions arguments?

// funnction parameters Vs functions arguments
// Function parameters are the name listed in the function's definition.
// Function arguments are the real values passed to the function.


             //parameters
// function mysum(a,b){
//     var total=a+b;
//     console.log(total);
// }
//      //Arguments 
// mysum(20,20);
// mysum(10,20);
// mysum(28,4);


//Interview Question regarding Functions

/*You can re-use code: Define the code once, and use it many times.
  You can use the same code many times with different arguments,
  to produced different results. 

//or
A function is a group of re-useable code which can be called anywhere in your program. 
This eliminates the need of writing the code time time again.

*/

//DRY ==> do not repeat yourself




//Function Expression

//It is simply means to create a function and put it in a variable.


// function mysum(a,b){
//     var total=a+b;
//     console.log(total);
// }

// var myExp= mysum(4,20);
// //myExp;






//Return keyward


//When compiler reaches a return statement,
//the function will stop executing.

//Functions often compute a return value.
//The return value is "returned" back to the caller.


// function mysum(a,b){
//     return total= a+b;
// }
// var TheExp= mysum(4,20);

// console.log("The total sum of the given numbers is "+TheExp); // In this way you can also write a string.



//Anonymous Function
/* This function is a simillar to and has same syntax as a function declaration.
   One can define "named" function expression (Where the  name of the expreesion might be used
   in the call stack for example)
   or "anonymous" function expressions.

   //In simple words; function without a name is called an anonymouse function.
 */




// var TheExp= function(a,b){
//     return total= a+b;
// }
// var add1 = TheExp(4,20);
// var add2 = TheExp(5,20);
// var add3 = TheExp(4,50);
// var add4 = TheExp(6,30);
// console.log("The total sum of the given numbers is "+add4);

// console.log(add1<add3);


//Welcome to "ECMAScrit": Modern JavaScript.
 

//We can use var, let and const.

//var was used in past but now it is not in comman use. It updates the value by
//by adding the same variable name, without letting you know. see below:
// var ab=10;
// var ab=20;
//console.log(ab);

// const is a comman practise these days, it can not be changed latter.
// const bc=10;
// const bc=20;
// console.log(bc);

//let is used whenever you have to redeclare the variable: its 
//different from re assigning the element.

//var ==> Function scope
//let and const==> Block Scope



/*Template literals (Template Strings) 

JavaScript program to print table for given number (8)?

*/
// for (let number=1; number<=10; number++){
//      let tableof=12;
//     console.log(`${tableof} * ${number} = ${tableof*number}`);
// }




/*Default Parameters
Default function parameters allow named parameters to be initiallized with default 
values if no value is assigned or undefined is passed.
 */
// function defaul(a,b=5){
//     return a*b;
// }

// console.log(defaul(3));




//Fat Arrow Function

// Normal way of writing Function(Traditional Function)

// console.log(SUM());
// function SUM(){
//     let a=3, b=4, SUM= a+b;
//     return`the sum of the two number is ${SUM}`;
// }

//This is how to convert it in Fat Arrow Function


// const SUM = () => {
//     let a=3, b=4; //SUM= a+b;
//     return`the sum of the two number is ${a+b}`;//here you can also put SUM or a+b, according to your interest.
// }
// console.log(SUM()); // You must have to initialize the function first, then you can call it.



//Another way of writing
// const SUM = () => {
//     return`the sum of the two number is ${(a=3)+(b=4)}`;}
// console.log(SUM());

//Fat arrow fuction says that if the code is in oneline that you have to return, then
// there is no need to write 'return': it will give you undefined, so you have to remove curly braces.

                                            //template laterals
//const SUM = () => `the sum of the two number is ${(a=3)+(b=4)}`;// It not allows us to use 'This' word.
//console.log(SUM());








 // Arrays In JavaScript
/*When we use var, we can store only one value in one variable at a time.
// var friend1='Usman';
// var friend2='Haider';
// var friend3='Ahmad';

//var myFriend="hefwkf qjwhfgiq qwkfgqi kwqdbqwk"
//Is there anything that can help to write multiple value in single variable.
//Here the arrays came.

When we feel like storing multiple values in one variable 
then, instead of var, we will use an array.
In JavaScrpt we have an Array class, and arrays are the
prototype of this class.*/


//Example;


// var friend1='Usman';
// var friend2='Haider';
// var friend3='Ahmad';
//when you are writing Square brakkits'[]', its mean that you are dealing with arrays.



             //lower boundary/                      //Upper Boundary  
            //lower Index                           //Upper index
//var myFriend=['Usman',   'Haider','Ahmad',true, 22,    male     ] //In other programming languages,
    //Index=    0           1        2     3     4   5           //you can not store same data type 
                                                                //in one variable.But in javaScript
                        //elements;0123etc                     //any data type can be used.

//other Way Of Writing
// var myFriend= new Array; //javaScript handelsthis line automatially, so it can be expunged.
//var myFriend=['Usman','Haider','Ahmad',true, 22,male]















/*What we will do ?

1;Traversal of an Array
2;Searchimg the filter in an array
3;How tp sort and compare an array
4;How to insert, add, replace and delete elements in array(CRUD)
5;Map(), Reduce(), Filter() */















//Traversal of an Array
/*
It means navigate through an array.

if we want to get the single data at a time and also if we want to change the data.
*/

// var myFriend=['Usman','Haider','Ahmad']
// console.log(myFriend[2]);


//If we want to check the lenth of the elements of an array.

//console.log(myFriend.length);//length's value will start from 1 not zero, and for last element yuo will substract one from the total length.



//We use for loop to navigate
// var myFriends=['Usman','Haider','Ahmad']

// for(var index1=0; index1<myFriends.length;index1++){
// console.log(myFriends[index1]);
// }

 //After ES6 we use following.
//For in loop
//For of loop 
//These loops are used in arrays only



// var myFriends=['Usman','Haider','Ahmad']

// for(let elements in myFriends){
// console.log(elements);
// }// 'For in' loop provide us with the index values of our elements.



// var myFriends=['Usman','Haider','Ahmad']

// for(let elements of myFriends){
// console.log(elements);
// }//'For of' loop provide us with the real values of our elements.



//We can use forEach loop here too: As its the combinition of For of and For in loops.
//Array.prototype.FOrEach()
//calls a function for each element in the array.


// var myFriends=['Usman','Haider','Ahmad','Sami','Asghar','Saad']

// myFriends.forEach(function(element, index, array){
// // console.log(element);
// console.log(element+" index: "+index +" " + array);//  you need to write first/element,rest forEach loop will automatically done.
// });//WE can not use 'Break' in forEach loop. IT will stop after complition.




//we can also do it with fat arrow function.

// var myFriends=['Usman','Haider','Ahmad','Sami','Asghar','Saad']

// myFriends.forEach((element, index, array)=>{

// console.log(element+" index: "+index +" " + array);
// });



//Searchimg the filter in an array



// var myFriends=['Usman','Haider','Ahmad','Sami','Asghar','Saad']

// console.log(myFriends.indexOf());


                          //incomplete due to an error in vedio



//How to insert, add, replace and delete elements in array(CRUD):create, read, update and delete.
//The push() method add one or more element to the end of the array
//and returns the new length of  the array.


//Array.Prototype.push()

// var animals=['goat','Hen','cow'];
// animals.push('beffallows');
// console.log(animals);

//Const is used to check index.
// const animals=['goat','Hen','cow'];
// const count=animals.push('beffallows','cats','crow');
// console.log(count);


////If you want to add the data in the starting,then, 'unshift' is used.

// var animals=['goat','Hen','cow'];
// animals.unshift('beffallows','cats','crow');
// console.log(animals);


// //In the case of numbers
// const myNumber=[1,2,3,4,5];
// myNumber.unshift(0);
// console.log(myNumber);




////Array.prptotype.pop()
// The pop() method removes the last element from an array and returns
// that element. This method changes the length of the array.



//  const myyars=['ahmad','sami','Asghar','gujjar'];

// console.log(myyars);
// console.log(myyars.pop());// remove last element and returns it.
// console.log(myyars);
// console.log(myyars.pop());
// myyars.pop(); //just remove last elemnet
// console.log(myyars);


//Array.prptotype.shift()
//The shift() method removes the first element from an array and returns
//that element. This method changes the length of the array.



//  const myyars=['ahmad','sami','Asghar','gujjar'];

// console.log(myyars);
// console.log(myyars.shift());// remove last element and returns it.
// console.log(myyars);
// console.log(myyars.shift());
// myyars.shift(); //just remove last elemnet
// console.log(myyars);




////Array.prototype.spice
//Adds or remove elements from an array.





////Challange Time
/*1: add December at the end of an array?
 2: what is the return value of splice method?
 3: Update may to May(update)?
 4: Delete June from an array */

// const mymonths=['feb','April','agust','may','june'];

////sol 1
// mymonths.push('july')
// console.log(mymonths);
// //sol 1
// const newmonth= mymonths.splice(5,0,'july');
// const newmonths= mymonths.splice(mymonths.length,0,'july'); //other way
// console.log(mymonths);
// //sol 2

// const newmonths= mymonths.splice(mymonths.length,0,'july');
// console.log(newmonths); // This returns back an empty array, as 'splice' method
                           // is mostly used for deleting purposes:returns deleted 
                           // elements,and we did't delete any.


////sol 3
// const mymonths=['feb','April','may','June','July'];
// const newmonth= mymonths.splice(1,0,'March');
// const thismonth=mymonths.splice(3,1,'May');
// console.log(mymonths);




////My favorite solution of Q#3
// const mymonths=['feb','April','may','June','July'];
// const indexofelement= mymonths.indexOf('may');
// if(indexofelement!=-1){
//    const updatedarray= mymonths.splice(indexofelement,1,'May');
//    console.log(mymonths);
// }else{
//     console.log(indexofelement);
// }




////Sol 4

// const mymonths=['feb','April','may','June','July'];
// const indexofelement= mymonths.indexOf('June');
// if(indexofelement!=-1){
//    const updatedarray= mymonths.splice(indexofelement,1);
//    console.log(mymonths);
//    console.log(updatedarray);// Splice gives only deleted element as a return.
// }else{
//     console.log(indexofelement);
// }







// //Map(), Reduce(), Filter() 











//Map Method:
           // it did't mutats the original array, 
           // instead returns a new array.




// const array1=[1,2,3,4,5,6,7,8,9,10,11,12,13];

// let newarray=array1.map((currentElemnt, index,array)=>{
// return currentElemnt>7;
// })
// console.log(array1);
// console.log(newarray);



//Difference between Map and forEach



// const array1=[1,2,3,4];

// let newarray=array1.map((currentElemnt, index,array)=>{
// return `Index No = ${index} have the value = ${currentElemnt} in the array = ${array}`;
// })

// console.log(newarray);


// const array2=[1,2,3,4];

// let newarray2=array2.forEach((currentElemnt, index,array)=>{
// return `Index No = ${index} have the value = ${currentElemnt} in the array = ${array}`;
// })
// console.log(newarray2);



////CHallange Time

/*1: Multiply all the elements in array with 2 and 
return only those values that are greater then 10.

 2: Return the square root of all the elements in an array.

*/





//Sol 1

// let arrayy = [2,2,3,4,5,5,6,7,8,9,9];

// let arrayy2=arrayy
//   .map((currentElemnt) =>{
//     return  currentElemnt*2;
// }).filter((currentElemnt)=>{                //this linkage is called chaining
//     return currentElemnt>10;
// })

//// can also be written in one line
// let arrayy2=arrayy.map((currentElemnt) =>currentElemnt*2).filter((currentElemnt)=>currentElemnt>10)
// console.log(arrayy2);




//Sol 2

// let arrayss = [25,9,169,36,81,144];
// let arraysqr=arrayss.map((currentElemnt) => Math.sqrt(currentElemnt))
//  console.log(arraysqr);


// Reduce Method


//It is used to flatten an array, that means to convert the 3d or 2d array into
// a single dimentional array.







// let arrayy = [2,2,3];
//                         //box container
// let arrayy2=arrayy.reduce((accumulator,curElem) =>{
//     debugger
//     return  accumulator+=curElem;
// })
// console.log(arrayy2);

// //other exapmle

// let arrayy = [2,3,4,5,5,6,7,8];

// let arrayy2=arrayy

//   .map((currentElemnt) =>{
//     return  currentElemnt*2;
// }).filter((currentElemnt)=>{                //this linkage is called chaining
//     return currentElemnt>10;
// }).reduce((accumulator,curElem) =>{
//     return  accumulator*=curElem;},8)//initial value can be add initially in accumulator.

//     console.log(arrayy2);





//How to flatten an array ?
//converting 2d and 3d array into one dimentional array.


// const arr=[
//     ['zone1','zone2'],
//     ['zone3','zone4'],
//     ['zone5','zone6'],
//     ['zone7','zone8'], //  ['zone7','zone8' ['zone7','zone8']] we can not reduce nesting till yet but in next update this is possible by a method nextly introduced.
// ];

// const flatarr= arr.reduce((accum,curElem)=>{
// return accum.concat(curElem);
// })
// console.log(arr);

















// //Strings In JavaScript
//A JavaScript string is zero or more characters written inside quotes.
// These are used for storing and manipulating texts.
//you can use single and double quotes.
//Strings can be created as primitives, from string literals , or objects, using 
//the string() constructor.

// let myname= 'Rai';
// let lastname='Ahmad';

// //let myName= new String("Rai Ahmad");// BY Constructor---> just for the sake of understanding.
// console.log(myName);
// console.log(myname);


// //How to find the length of a string?
// //string.prototype.length
// //Reflects the length of the string.
// let myFriend="sami";
// console.log(myFriend.length);






// Escape Charactor
// Finding a string in a string
// Searching a string in a string 
// Extracting string parts 
// Replacing string content 
// Extracting string characters 
// Other useful methods











// //Escape Character:

// The backslash (\) escape character turns special  characters into string characters.

// //let anySentence="we are Kharals from the "Thatta Sarver", jhambhra"; //Can not do that 
// let anySentence="we are Kharals from the \"Thatta Sarver\", jhambhra";//it can be written by using back slashes.
// // // If you don't want to mess, then use the alternative qoutes.
// //let anySentence='we are Kharals from the "Thatta Sarver", jhambhra';
// //let anySentence="we are Kharals from the 'Thatta Sarver', jhambhra";
// console.log(anySentence);



//Finding a string in a string:

// //String.prototype.indexOf(searchvalue [, fromindex]).
// // The indexOf() method returns the index of (the position of) thee first 
// // occurence of a specified text in a string.
// const myBioData='I am Rai Ahmad Khan';
// // console.log(myBioData.indexOf('ahmad'));// The indexOf() method is case sensitve
// //console.log(myBioData.indexOf('Ahmad'));
// console.log(myBioData.indexOf('a',7));// Means that it skip the previouse 7 index No..

// //String.prototype.lastIndexOf(searchvalue [, fromindex]).// it searches from last to first dirction.

// console.log(myBioData.lastIndexOf('R'));// Not clear




// Searching a string in a string:


//String.prototype.search(regexp)
// //The search() method searches a string for a specified value and returns
// //the position of the match.
// //It is case sensitive
// const myBioData='I am Rai Ahmad Khan';
// let searchData= myBioData.search("Khan");
// console.log(searchData);
// // The search() method cannot take the second start position Argument, like this :('a',7));




// Extracting string parts:


//Ther are three methods for extracting a part a stirng:
//1: slice(start , end)
//2: substring(start , end)
//3: substr(start , end)


//1: slice(start , end)
// It extract a part of strimg and return the extracted part in a new string.
//THis method takes two parameters: the starting and the end position(end not encluded)

// var str= "Apple, Banana, Gawa, Pinaple";
// let respon= str.slice(7,-1);
// console.log(respon);

//The slice() method selects the elements starting at the given start argument,
//and ends at, but does not include, thee given end argument.

//Note: The original array will not be changed.



//Challange Time:


//Q: DISPLAY ONLY 280 CHARATERS OF A STRING LIKE THE ONE USED IN TWITTER?

// let myinsta= "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam amet, sapiente eos ipsam facilis distinctio a ducimus. Magnam provident eum unde voluptatum, incidunt laborum quasi sunt distinctio, dolores sed atque. Eos necessitatibus modi iure dignissimos amet rem ullam enim. Fuga ratione, dignissimos vero laudantium earum incidunt repellendus facilis quisquam libero beatae omnis fugiat consequatur voluptatibus sint, tenetur ut doloribus voluptas natus nemo ad? Eaque sequi facilis harum id, placeat saepe nihil debitis porro, voluptate rerum aspernatur in, doloribus sapiente officiis assumenda sint repellat officia ipsam dicta amet neque. Corporis tenetur expedita fugit fugiat magni rem, debitis, assumenda distinctio dolorem, ratione totam qui obcaecati voluptatem consectetur sit repellat doloremque ipsam doloribus? Officia iusto, veniam omnis autem error dolorem aperiam voluptatibus ipsam iste voluptas deserunt perspiciatis! Quas blanditiis quae exercitationem culpa adipisci optio non! Culpa numquam possimus aliquam ab voluptatem commodi laborum reprehenderit quod sit molestiae optio totam modi expedita esse, dolorum vero? Temporibus, rem. Non libero perspiciatis veniam officia, debitis, eaque distinctio maiores vitae iure culpa vero rem sed temporibus eius alias assumenda recusandae atque earum nobis animi saepe molestiae exercitationem quis tenetur? Cupiditate, perferendis? Asperiores quod ipsum pariatur nostrum provident doloremque eum blanditiis quis dolor error, cumque ipsa adipisci nobis odit similique placeat assumenda illum accusamus nisi, dolore nemo. Modi laboriosam, necessitatibus perferendis explicabo accusantium eos libero dignissimos odio, cupiditate, repellendus velit. Earum quia minima atque numquam perspiciatis eum alias necessitatibus distinctio? Distinctio quo vitae nam atque suscipit sit cupiditate, molestias nulla autem alias debitis explicabo repellendus quas quisquam tenetur magni eos illum, blanditiis corporis, consequatur iusto earum aut harum. Illo, est omnis. Harum mollitia enim ipsum aperiam natus accusamus vel, maxime laudantium cumque temporibus praesentium vero velit odio ratione.";
//   let myActualThrids= myinsta.slice(0,280);
//   console.log(myActualThrids);
//   console.log(myActualThrids.length);
//   console.log(myinsta.length);



//2: substring(start , end)
// Is is similar to slice().
//The difference is that it cannot accept thenegative indexes.



// var str= "Apple, Banana, Gawa, Pinaple";
// let respon= str.substring(8,-3);
// console.log(respon);

////If we give negative values then the charater are counted
// from the 0th position.


//3:substr(start , end)
// Is is similar to slice().
//The difference is that the second parameter specifies the 
//length of the extracted part.


// var str= "Apple, Banana, Gawa, Pinaple";
// // let respon= str .substr(8,-3);
// let respon= str .substr(-3);// It gives the last value
// console.log(respon);



// Replacing string content():


//String.prototype.replace(searchfor, replaceWith)


//The Replace() method replaces a specified value with 
//another value in a string.


// let myData="This was Alpha was";
// let reData= myData.replace('was','is');
// console.log(reData);

//Points to remember:
//1:The replace() method does not change the string it is called
//on. It returns a new string.
//2: By default, the replace() method replaces only the first match.
//3:By default, the replace() method is case sensitive.





// Extracting string characters:

//There are three methods for extracting string characters:

//1:charAt(position)
//2:charCodeAt(position)
//3:Property access[]


//CharAt() method
// The charAt() method returns the character at a 
//specified index(position) in a string.

// let myCharAt="abcdefghijklmnopqrstuvwxyz";
////console.log(myCharAt.charAt(0));
// console.log(myCharAt.charAt(15));




//CharCodeAt:
// This method returns the unicode of the character at a specified
// index in a string:
//The method returns a UTF-16 Code(an integer between 0 and 65535).


//The unicode standard provides a unique number for every character
//no matter the plateform, device, application, or lamguage. UTF-8
//is a populer Unicode encoding which has 88-bit code units which 
//JavaScript is using. It has different value for capital and small
//letters.




// let myCharCodeAt="Hello World";
// console.log(myCharCodeAt.charCodeAt(0));// H has 72 unicode Value.
















//Challange Time:
//Q: Return the unicode of the last charater in a string.

// let myCharCodeAt="Hello World";
// // console.log(myCharCodeAt.length);
// // console.log(myCharCodeAt.charCodeAt(10));
// let lastchar=myCharCodeAt.length - 1; //-1 to fix the index number.
// console.log(lastchar);
// console.log(myCharCodeAt.charCodeAt(lastchar));



//Property Access:

//ECMAScript 5(2009) allows property access [] on Strings.


// var str="Hello World";
// console.log(str[1]);// It is same as array but called differently
// // when dealing with string.





// Other useful methods:



//1:
// let myName="This IS AlphA";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());


//2:
//Concat Method:

// let fName= "Rai";
// let mName='Ahmad';
// let lName="Khan";

// console.log(fName+" "+mName+" "+lName);
// console.log(fName.concat(" ",mName," ",lName));
// console.log(fName.concat(' ',mName));
// console.log(fName.concat(mName));
// console.log(fName.concat(mName,lName));
//console.log(`${fName} ${mName} ${lName}`); //VIP






//string.trim()
//The trim() method removes whitespace from both sides of a sides of a string.
// It only trims the starting and ennding spaces only.


// var mytest= '               Hello world!            ';
// console.log(mytest.trim());





//split() Method
// It is used to convert the string into array.

// var mystring="a,b,c,d,e,f";
// var mystring2="a,b,c d,e,f";
// var mystring3="a,b,c|d,e,f";
// console.log(mystring.split(","));                 //Split on commas
// console.log(mystring2.split(' '));                 //Split on Spaces
// console.log(mystring3.split("|"));                 // Split on pipe















//Section 8

//Date and Time object in JavaScript

//JavaScript Date objects represents a single moment in time in a
// platform-independent formet. Date objects contains a number that
// represents milliseconds since 1 january 1970 UTC.

// Creating Date Objects
//There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, days, hours, minutes, seconds, milliseconds)
// //it takes 7 arguments
// new Date(millisecond)
// //we cannot avoid month section
// new Date(date string)



//NEW METHOD
//Date objects are created by new Date() Constructer:it will be elaborated later.

// let todaydate= new Date();

// console.log(todaydate);
// console.log(new Date().toLocaleString()); // VIP
// console.log(new Date().toString()); //Detailed

//NEW METHOD
//Date.now()
// REturns the numereic value corresponding to the current time-the number
// of milliseconds elapsed since January 1, 1970 00:00:00 UCT.
// console.log(Date.now());

















