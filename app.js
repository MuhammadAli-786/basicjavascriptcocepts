// // alert("Hello word");
// document.write("hello world!");
// console.log("Hello world!");

// var a=5;
// var b= 6;

// var c = a+b;
// // document.write(c); 
// alert(c);
// var a = "Muhammad";
// var b= "Ali";
// document.write(a + " " +b);

// num1= "10";
// num2= "20";
// alert(num1 + num2);
// this is a string the result of this code is (1020) 

// this code is in numbers so the result is (30)
// num1= 10;
// num2= 20;
// alert(num1 + num2);

// var num1 = 10;
// var num2 = 20 ;
// var num3 = num1 + 20;
// document.write(num3);

// legal decleration 
//var firstName //This is called camel case decleration.

//var first_name //This is called snake case decleration.

//var firstname // we can initalize like this.

//var firstname1 // also with this.

//illegal decleration.
//first-name // we can not use this.
//first name // this illegal
//first@name //this is illegal.
//123firstname // this is illegal decleration.

//the difference between declear and initilization.

//decleration of variable 

//var1 num1;

//This is initilization  and decleration.
//var num1=20;

// var num1=1;
// var result= num1++; // post increment.
// console.log (result)

// console.log(num1);
// var num1= 10;
// var result =num1++;
// console.log(result);

// var num1= 10;
// var result = num1--;
// console.log(result);

// var num1= ++num1; // pre increment .

//in the same case we have decrement.
// var num1=1;
// var result= num1--; // post decrement.
// console.log (result)

// console.log(num1);

// var num1= --num1; // pre decrement .


// ***************** pre increment and decrement *******************

// var num1= 10;
// var result = ++num1;
// console.log(result);

// var num1= 10;
// var result = --num1;
// console.log(result);


//Prompot  using for get input from the user.
// by defalut prompot uses the string 

// var userInput1 = prompt("Enter First numer:");
// var userInput2 = prompt("Enter Second number:");
// var userInput3 = prompt("Enter Third number :");
// var result = userInput1 + userInput2 + userInput3;
// document.write ("Addition of the three numbers in prompot"+" " +result);

// if we make the number in prompot we use the + sign before prompot.
// var userInput1 = +prompt("Enter First numer:");
// var userInput2 = +prompt("Enter Second number:");
// var userInput3 = +prompt("Enter Third number :");
// var result = userInput1 + userInput2 + userInput3;
// document.write ("Addition of the three numbers in prompot"+" " +result);


// ******************************** If Statement *********************************

// var city = prompt("where do you live");
// if (city === "karachi"){
//     alert("welcome to the city of lights");
// }
// else
// {
//     alert("Invild...");
// }



// The age is greater than 20 means it start from 21
// if we use equal to (=) sign than it means strat from 20.
// var city = prompt("Enter your age:");
// if (city >= 20){
//     alert("welcome youe eligible");
// }
// else
// {
//     alert("your not eligible");
// }


// if we use less than sign than it means start from 19.
// this is for less than 

// var city = prompt("Enter your age:");
// if (city <= 20){
//     alert("welcome youe eligible");
// }
// else
// {
//     alert("your not eligible");
// }


// we have equal sign  (==)  its check the left hand and right side okie than ok 

// var city = prompt("where do you live");
// if (city == "karachi"){
//     alert("welcome to the city of lights");
// }
// else
// {
//     alert("Invild...");
// }


// we have equal sign  (===)  its check the left hand and right side and also data type. 
// here the data type of prompt is string we are not using plus(+) sign 
// var city = prompt("where do you live");
// if (city === 20){
//     alert("welcome to the city of lights");
// }
// else
// {
//     alert("Invild...");
// }

// here we have example of number for (===) three equal to signs.

// var city = +prompt("where do you live");
// if (city === 20){
//     alert("welcome to the city of lights");
// }
// else
// {
//     alert("Invild...");
// }


// var rollNum = +prompt("Enter your Roll number");
// if (rollNum !== 12345 ){
//     alert("your eligible for exam");
// }
// else{
//     alert("your not eligible for exam");
// }


// var name=prompt('what\'s ur Name');
// if(name==='ali'){
//     alert('welcome');
// }


// Comparison opreator (&) and or opreator.
// var userAge = +prompt("Enter your age");
// var userGender = prompt ("Enter your Gender");
// var userWeight = +prompt("Enter your Weight");
// if (userAge =>30 && userGender == "male" && userWeight <= 300){
//     alert("Come and try out our gym!");
// }
// else {
//     alert("Try in next time please!");
// }


// if your using the && opreator if one condition is false than it false if all condition are true than execute true.

// var userAge = +prompt("Enter your age");
// var userGender = prompt ("Enter your Gender");
// var userWeight = +prompt("Enter your Weight");
//     if (userAge >= 20 && userGender == "male" && userWeight <=300){
//     alert("Come and try out our gym!");
// }   
//  else{
//     alert("Try in next time please!");
// }

// OR (||) opreator 
// if your using the || opreator if one condition is true than it true if all condition are false than execute false.
// var userAge = +prompt("Enter your age");
// var userGender = prompt ("Enter your Gender");
// var userWeight = +prompt("Enter your Weight");
//     if (userAge >= 20 || userGender == "male" || userWeight <=300){
//     alert("Come and try out our gym!");
// }   
//  else{
//     alert("Try in next time please!");
//  }

//  var userAge = +prompt("Enter your age");
// var userGender = prompt ("Enter your Gender");
// var userWeight = +prompt("Enter your Weight");
//     if (userAge >= 20 || userGender == "male" && userWeight == 300){
//     alert("Come and try out our gym!");
// }   
//  else{
//     alert("Try in next time please!");
//  }

// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter Second number ");
// var sign = prompt ("Enter your sign");
// if(sign === "-" ){
//     console.log(firstNumber - secondNumber);
// }
// else if(sign === "+"){
//     console.log(firstNumber + secondNumber);

// }
// else if(sign === "*"){
//     console.log(firstNumber * secondNumber);

// }
// else if(sign === "/"){
//     console.log(firstNumber / secondNumber);
// }


// nested if

// var x = 5;
// var y = 10;
// var a = 12;
// var b = 20;
// var c = 30;
// var d = 30;
// var e = 6;
// var f = 25;

// if (c === d) {
//     if (x === y) {
//         g = h;
//     }
//     else if(a === b ) {
//        g = h;
//     }
//     else{
//         // here we assign the value of is equal to value of f 
//         e = f;
//         console.log(e);
//         console.log(f);
//     }
// }
// else
// {
//     e = f;
// }

// Array is the group of value or variable it is also work like container, it containe the element.

// var arr = ["apple", "orange", "banana", "mango"];
// var newArr = arr.slice(2,3); // this is camel case represantion of array.
// console.log(newArr);

// console.log(arr.slice (0,3)); // its always used index zero or we can say it minus the one element that you called.

var arr= [1, 2, 3 ,4, 6 ,7 ,8 ];
// arr1[11]="shah";
// console.log(arr1.splice(4,7)); // splice replace the element using through index value.
// console.log(newArr); 
// console.log(arr);
// console.log(arr.splice (2,2, "Elephant" , "Tigher"));
// console.log(arr.length);
// console.log(arr);
// console.log(arr.push("grapes","Fruits")); // its insert the value in last in the array.
// console.log(arr.pop()); // its delete the last element of the array.
// console.log(typeof()); // its used to find the data type of the element.
// console.log(arr.shift("grapes")); // its delete the first element of the array.
//console.log(arr.unshift("grapes")); its insert the value in the start.
// console.log(arr);
// document.write(arr);
// alert(arr);

// var fruits = [];
//  fruits[0] = "Dragon Fruit";
//  fruits[1] = "Banana";
//  fruits[2] = "Orange";
//  fruits[3] = "Banana";
//  fruits[4] = "Apple";
//  fruits[5] = "Mango";
//  fruits[6]  = "watermallan";
//  console.log(fruits);

// var userInput = +prompt("Enter number");
// if (userInput %2  ==0) 
// {
// console.log("its even number");    
// }
// else if (userInput % 2 !==0){
//     console.log("this is odd number");
// }


// ************************************ For loop ***********************************
//  for (var i = 0 ;i < 9; i++)
//  {
//     document.write(i + "Hello world!" + "<br>");   // loop contain three methods (initilization, condition , Increment / decrement)
//  }

// var UserInput = prompt("Enter your city name");
// var arr = ["Karachi", "Lahore", "Islambad" , "Sukkur"];
// for(x =0 ; x <= arr.length ; x++){
//     if(UserInput === arr[x]){
//         alert("city found");
//         break;
//     }
//     else{
//         alert("city not found");
//         break;
//     }
// }


// var UserInput = prompt("Enter your city name");
// UserInput = UserInput.toLowerCase(); // user for lowercase or small alphabate. 
// UserInput = UserInput.toUpperCase(); // use for uppercase or Capital Alphabate.
// var arr = ["Karachi", "Lahore", "Islambad" , "Sukkur"];
// for(x =0 ; x <= arr.length ; x++){
//     if(UserInput == arr[x]){
//         alert("city is cleaned ");
//         break;
//     }
//     else{
//         alert("city is not cleaned !");
//         break;
//     }
// }

// var firstName = ["Muhammad", "Pitafi"]
// var lastName = ["Ali", "Aamir" , "Hasnain"]
// for ( i = 0; i < firstName.length; i++) {
//     for ( j = 0; j < lastName.length; j++) {
//         console.log(firstName[i] + " " + lastName[j]);
//     }
// }

// var userNumber = +prompt("Enter a number");
// for(i = 1 ; i<= 10 ; i++){
//     document.write(i + " x " + userNumber + " = " + userNumber * i + "<br>" );
// }

// var nam = "this is my house";
// var arr = nam.split(" ");  // used to split or write one word seprate in arry
// console.log(arr);

// var nam = "this is my house";
// var convert = nam.toUpperCase(); // used to convert in capital. 
// console.log(convert);

// var word = prompt("Enter a word");
// var check = "";
// for ( var a = word.length -1 ;  a>=0 ; a--) {
//     check += word[a];  
// }
// if (check === check) {
//     console.log( word + " " +"this is palindrome word");
// }

// ***************** Pramid in loop ********************

// let n= 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);
// output
// *
// **
// ***
// ****
// *****

// let n = 10;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         string += "*";
//     }
//     string += "\n";
// }  
// console.log(string);

// var cityToCheck = prompt("Enter name of city");
// cityToCheck = cityToCheck.toLowerCase();  
// var cleanestCities = ["karachi", "lahore", "islamabad", "sukkur"];  
// for ( var i = 0; i <= cleanestCities.length; i++) {

// if (cityToCheck===cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//     break; 
// } 
// }


// var cityToCheck = prompt("Enter name of city");
// var firstChar = cityToCheck.slice(0,1);
// // console.log(firstChar);
// firstChar = firstChar.toUpperCase();
// var otherChar = cityToCheck.slice(1);
// // console.log(otherChar);
// otherChar = otherChar.toLowerCase();  
// var cityToCheck = firstChar + otherChar;
// var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Sukkur"];  
// for ( var i = 0; i <= 4; i++) {

// if (cityToCheck===cleanestCities[i]) {
//     console.log(cityToCheck + " It's one of the cleanest cities");
//     break; 
// } 
// }

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === "  ") {
//         alert("double spaces!");
//         break;
//     }
// }

// var a = "Irfan";
// console.log(a.slice(1,2));

// var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War. Write a program that takes takes two strings and concatenates them into a new string. However, if the concatenation creates a double word, then one of the words should be omitted. This exercise is similar to the Three-Legged Stool exercise on page 36 in the book JavaScript for Kids. ";
// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }
// console.log(text);

// var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War. Write a program that takes takes two strings and concatenates them into a new string. However, if the concatenation creates a double word, then one of the words should be omitted. This exercise is similar to the Three-Legged Stool exercise on page 36 in the book JavaScript for Kids. ";
// for (i = 0 ; i < text.length; i++){
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//         console.log(text);
//     }
// }
// console.log(Math.random()*3);

// var headUser = prompt("Enter Head user name");
// var TailUser = prompt("Enter Tail user name");
// var toss = Math.random()*2;

// var floor = Math.floor(toss);

// if (floor === 0) {
//     alert(headUser +"Head User Win");
// }   
// else {
//     alert(TailUser +"Tail User Win");
// }


// var a = 10;
// console.log(a);

// var a = "10";
// console.log(a);

// coverting string into the number or integers

var string = "10";
// console.log(Number(string)); 
// console.log(parseInt(string)); // these both are used to convert string into the numbers.

// coverting number in to string.
// var num = 10;
// console.log(num.toString()); 
// console.log(parseInt(string)); // these both are used to convert string into the numbers.

// **************************  funtions  ******************************

// function add () {
//     var a= 5;
//     var b= 10;
//     var c = a+b;
//     alert(c);
// }
// add();

// function greet ( ) {
//     alert ("Hello? how are you ");
// }
// greet();

// function para (a , b) {
//     alert (a+b);
// }
// para(10 , 20);

// function add( ) {
//     var a = 5;
//     var b = 7;
//     var c = a+b;
//     return c;
// }
// var result = add();
// alert (result);

// var a = 10;
// var b = 5 ;
// function add ( ) {
//     var f = 11; f and g is global variable we can not use these out of the global.
//     var g = 25;
//     alert(a+b);
//     alert(f+g); // 
    
// }
// add(// this is argument of funcation where we can pass our data);
// alert (a+b);


// function cal(num1, opreator,num2){
//     if (opreator === "+"){
//         return num1 + num2;
//     }
//     else if (opreator === "-"){
//         return num1 - num2;
//     }
//     else if (opreator === "*"){
//         return num1 * num2;
//     }
//     else if (opreator === "/"){
//         return num1 / num2;
//     }
//     else {
//         return "Invild opreator";
//     }

// }
// var result = cal(10,"+",20);
// var result1 = cal(10,"-",20);
// var result2 = cal(10,"*",20);
// var result3 = cal(10,"/",20);
// var result4 = cal(10,"$",20);
// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// function number(num1, num2 = 5) {
//     return num1 + num2;
    
// }
// let result=number (10, 20); // if any case user can't provide second number than it wiil take 5; thats why we use this case.
// console.log(result);

// ***************** Switch *****************
// switch statement is more faster than if else if that why developer use this.

// var day = prompt("Enter day name");  
// switch (day) {
//     case "monday":
//         alert("Today is monday");
//         break;
//     case "tuesday":
//         alert("Today is tuesday");
//         break;
//     case "wednesday":
//         alert("Today is wednesday");
//         break;
//     case "thursday":
//         alert("Today is thursday");
//         break;
//     case "friday":
//         alert("Today is friday");
//         break;
//     case "saturday":
//         alert("Today is saturday");
//         break;
//     case "sunday":
//         alert("Today is sunday");
//         break;
//     default:
//         alert("Invild day");
//         break;
// }


// ********** While loop ***************
// var number = 0 ;
// while (number <= 10) {
//     console.log(number); // 
//     number++;   
// }


// **************** Do while loop ****************
// var i = 10; // if condition is false than it show the intilize value it run one time.
// do {
//     alert(i);
//     i++;
// } 
// while (i<=3);
 
// function greet(){
//     var inputField = document.getElementById("username");
//     console.log(inputField.value); // getting input value of the field.
//     inputField.value =""; // empty search bar after submitting 

// }
    
// var getPara = document.getElementById("para");
// getPara.innerHTML += "This is paragraph ";

