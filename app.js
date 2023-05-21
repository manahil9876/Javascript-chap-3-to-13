var age = 17; 
window.alert("My age is: 17 years old");


var visitcount=7 
window.alert("You have visited this site:7 times");


var birthYear = 2005;


console.log("My birth year is 2005 ");
console.log(typeof birthYear);


var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 6;


console.log(visitorName+ " ordered  " + quantity + " " + productTitle + "(s) on Outfitters Clothing store");


var name = "Jack", rollNo = 33 , age = 19;
console.log(name, rollNo, age)


// var firstName = "John";
// var age = 25;
// var favoriteColor = "Blue";
// var _customerCount = 100;
// var firstName = "John";
//         var age = 25;
//         var favoriteColor = "Blue";
//         var _customerCount = 100;
//         var totalPrice = 99.99;
    
//         console.log(firstName, age, favoriteColor, _customerCount, totalPrice);

console.log("Rules for naming JS variables");
    console.log("Variable names can only contain letters, digits, underscores, and dollar signs.");
    console.log("For example: $my_1stVariable");

    console.log("Variables must begin with a letter, underscore, or dollar sign.");
    console.log("For example: $name, _name, or name");

    console.log("Variable names are case-sensitive");
    console.log("Variable names in JavaScript are case-sensitive. For example: 'myVariable' and 'myvariable' are different variables");

    console.log("Variable names should not be JavaScript keywords");
    console.log("Avoid using JavaScript keywords as variable names, such as 'var', 'function', 'if', etc.");
 

                    //    <--------!-------------->
    const num1 = 5;
    const num2 = 3;
    
    const sum = num1 + num2;
    
   
    console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

//     const num1 = 5;
//     const num2 = 3;

//     const difference = num1 - num2;

   
//     console.log('The difference between ' + num1 + ' and ' + num2 + ' is: ' + difference);
//     document.write('The difference between ' + num1 + ' and ' + num2 + ' is: ' + difference + '<br>');

    
//     const product = num1 * num2;

//     console.log('The product of ' + num1 + ' and ' + num2 + ' is: ' + product);
//     document.write('The product of ' + num1 + ' and ' + num2 + ' is: ' + product + '<br>');

    
//     const quotient = num1 / num2;

   
//     console.log('The quotient of ' + num1 + ' and ' + num2 + ' is: ' + quotient);
//     document.write('The quotient of ' + num1 + ' and ' + num2 + ' is: ' + quotient + '<br>');
//   </script>
// </body>
// </html>

// a. Declare a variable
var number;

// b. Show the value of variable in the browser
document.write("Value after variable declaration is: " + number + "<br>");

// c. Initialize the variable with some number
number = 5;


document.write("Initial value: " + number + "<br>");


number++;


document.write("Value after increment is: " + number + "<br>");


number += 7;


document.write("Value after addition is: " + number + "<br>");


number--;

document.write("Value after decrement is: " + number + "<br>");


var remainder = number % 3;


document.write("The remainder is: " + remainder + "<br>");

var number;
console.log("Value after variable declaration is:", number);
number = 5;
console.log("Initial value:", number);
number++;
console.log("Value after increment is:", number);
number += 7;
console.log("Value after addition is:", number);
number--;
console.log("Value after decrement is:", number);
var remainder = number % 3;
console.log("The remainder is:", remainder);


var ticketPrice = 600;  
var numberOfTickets = 5;  

var totalCost = ticketPrice * numberOfTickets;  


console.log("Total cost to buy " + numberOfTickets + " tickets to a movie is Rs " + totalCost);

var number = 4;  // The number for which the multiplication table is generated

console.log("Multiplication Table of 4"+ number);

for (var i = 1; i <= 10; i++) {
  var result = number * i;
  console.log(number + " x " + i + " = " + result);
}
var number = 4; 

console.log("Multiplication Table of " + number);

for (var i = 1; i <= 10; i++) {
  var result = number * i;
  console.log(number + " x " + i + " = " + result);
}





var celsius = 25;  
var fahrenheit = (celsius * 9/5) + 32;  

console.log(celsius + "°C is " + fahrenheit + "°F");
var fahrenheit2 = 77;   
var celsius2 = (fahrenheit2 - 32) * 5/9; 

console.log(fahrenheit2 + "°F is " + celsius2 + "°C");

var priceOfItem1 = 650;
var priceOfItem2 = 300;
var quantityOfItem1 = 3;
var quantityOfItem2 =7 ;
var shippingCharges = 100;

var totalCost = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges;


console.log("************ Receipt ************");
console.log("Price of Item 1: " + priceOfItem1);
console.log("Quantity of Item 1: " + quantityOfItem1);
console.log("Price of Item 2: " + priceOfItem2);
console.log("Quantity of Item 2: " + quantityOfItem2);
console.log("Shipping Charges: " + shippingCharges);
console.log("Total Cost: " + totalCost);
console.log("*********************************");



var totalMarks = 980;
var marksObtained = 804;


var percentage = (marksObtained / totalMarks) * 100;


console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + marksObtained);
console.log("Percentage: " + percentage + "%");



const usd = 10;
const sar = 25;
const usdToPkrRate = 104.80;
const sarToPkrRate = 28;


const totalPkr = (usd * usdToPkrRate) + (sar * sarToPkrRate);

console.log(`Total currency in PKR: ${totalPkr}`);



var number = 10;

var result = (((number + 5) * 10) / 2);


console.log("Result: " + result);


// Store the current year
var currentYear = new Date().getFullYear();


var birthYear = 2005; 


var age1 = currentYear - birthYear;
var age2 = age1 - 1;


console.log( "They are either " + age1 + " or " + age2 + " years old.");


var radius = 20;  
var circumference =125.67999 * Math.PI * radius;

var area = Math.PI * Math.pow(radius, 20);
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2));



var favoriteSnack = "Chocolate";
var currentAge = 17; 

var maximumAge = 65; 

var amountPerDay = 3; 

var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacksNeeded = daysRemaining * amountPerDay;

console.log("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);





var a = 10;
console.log("The value of a is: " + a);
console.log("The value of ++a is: " + (++a));
console.log("Now the value of a is: " + a);
console.log("The value of --a is: " + (--a));
console.log("Now the value of a is: " + a);
console.log("The value of a-- is: " + (a--));

console.log("Now the value of a is: " + a);



var a = 4, b = 1;
var result = --a - --b + ++b + b--;

console.log("a =", a);
console.log("b =", b);
console.log("result =", result);





var name = prompt(" Syeda Manahil Ahmed:");
console.log("Hello,Sir " + name + "! Welcome!");


var number = prompt("Enter a number:");


if (!number) {
  number = 5;
}

for (var i = 1; i <= 10; i++) {
  var result = number * i;
  console.log(number + " x " + i + " = " + result);
}

let sub1 = prompt("Enter name of subject 1:Maths");
let sub2 = prompt("Enter name of subject English:");
let sub3 = prompt("Enter name of subject 3:Physics");


const totalMark= 100;


let marksSub1 = parseInt(prompt(`Enter obtained marks for ${sub1}:55`));
let marksSub2 = parseInt(prompt(`Enter obtained marks for ${sub2}:26`));
let marksSub3 = parseInt(prompt(`Enter obtained marks for ${sub3}:46`));


let totalObtainedMarks = marksSub1 + marksSub2 + marksSub3;
let percent= (totalObtainedMarks / (totalMarks * 3)) * 100;



console.log("Subject\t\tTotal Marks\tObtained Marks");
console.log(`${sub1}\t\t${totalMarks}\t\t${marksSub1}`);
console.log(`${sub2}\t\t${totalMarks}\t\t${marksSub2}`);
console.log(`${sub3}\t\t${totalMarks}\t\t${marksSub3}`);
console.log("-------------------------------------");
console.log(`Total\t\t${totalMarks * 3}\t\t${totalObtainedMarks}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);



const city = prompt("Enter the city name:");


if (city.toLowerCase() === "Karachi") {
  console.log("Welcome to the City of lights!");
} else {
  console.log("Welcome!");
}



const gender = prompt("Enter your gender:");

if (gender.toLowerCase() === "male") {
  console.log("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  console.log("Good Morning Ma'am.");
} else {
  console.log("Good Morning.");
}
var signalColor = prompt("Enter the color of the road traffic signal:");

signalColor = signalColor.toLowerCase();

if (signalColor === "red") {
  console.log("Must Stop");
} else if (signalColor === "yellow") {
  console.log("Ready to move");
} else if (signalColor === "green") {
  console.log("Move now");
} else {
  console.log("Invalid signal color");
}


var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));


if (remainingFuel < 0.25) {
  console.log("Please refill the fuel in your car");
} else {
  console.log("Fuel level is sufficient");
}


var secretNumber = Math.floor(Math.random() * 1) + 1; 

var userGuess = parseInt(prompt(" Guess the secret number (between 1 and 10):")); 
if (userGuess === secretNumber) {
  console.log("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1) {
  console.log("Close enough to the correct answer");
} else {
  console.log("Wrong guess. Try again!");
}
var number = parseInt(prompt("Divsion:"));

if (number % 3 === 0) {
  console.log(number + " is divisible by 3");
} else {
  console.log(number + " is not divisible by 3");
}



varnumber = parseInt(prompt("Enter a number:")); 
if (number % 2 === 0) {
  console.log(number + " is an even number");
} else {
  console.log(number + " is an odd number");
}




var temperature = parseFloat(prompt("Enter the temperature:")); 

if (temperature > 40) {
  console.log("It is too hot outside.");
} else if (temperature > 30) {
  console.log("The weather today is Normal.");
} else if (temperature > 20) {
  console.log("Today's weather is cool.");
} else if (temperature > 10) {
  console.log("OMG! Today's weather is so Cool.");
} else {
  console.log("The temperature is below 10 degrees..");
}


var firstNumber = parseFloat(prompt("Enter the first number:")); 

var secondNumber = parseFloat(prompt("Enter the second number:")); 

var operation = prompt("Enter the operation (+, -, *, /, %):"); 
var result; 

if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
  console.log("Invalid operation. Please enter a valid operation.");
}

if (result !== undefined) {
  console.log("The calculated result is: " + result);
}

var input = prompt("Enter a character:");

var charCode = input.charCodeAt(0); 

if (charCode >= 48 && charCode <= 57) {
  console.log("The given input is a number");
} else if (charCode >= 65 && charCode <= 90) {
  console.log("The given input is an uppercase letter");
} else if (charCode >= 97 && charCode <= 122) {
  console.log("The given input is a lowercase letter");
} else {
  console.log("The given input is neither a number nor a letter");
}


var number1 = parseInt(prompt("Enter the first integer:"));

var number2 = parseInt(prompt("Enter the second integer:")); 
if (number1 > number2) {
  console.log(number1 + " is larger than " + number2);
} else if (number1 < number2) {
  console.log(number2 + " is larger than " + number1);
} else {
  console.log("Both integers are equal");
}
var number = parseFloat(prompt("Enter a number:")); 

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

var correctPassword = "Mypassword"; 

var enteredPassword = prompt("Enter your password:"); 

if (enteredPassword === "") {
  console.log("Please enter your password.");
} else if (enteredPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}

