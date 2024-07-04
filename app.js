/ _______________________________________________Question 1_______________________________________________________________________________

//  var userInput= +prompt("Enter your number.");
//  var number= userInput;
 
//  document.write( "Number : "  + number  + "<br>");
//  document.write( "Round of Value : " + Math.round(number)  + "<br>");
//  document.write("floor value  : " + Math.floor(number) + "<br>");
//  document.write("Ceil :  " + Math.ceil(number) + "<br>");

// _______________________________________________Question 2_______________________________________________________________________________
 
// var userInput= +prompt("Enter your number.");
//  var number= userInput;
 
//  document.write( "Number : "  + number  + "<br>");
//  document.write( "Round of Value : " + Math.round(number)  + "<br>");
//  document.write("floor value  : " + Math.floor(number) + "<br>");
//  document.write("Ceil :  " + Math.ceil(number) + "<br>");

//  _______________________________________________Question 3______________________________________________________________________________

// var value = -4 ;
// var absoluteValue = Math.abs(value);
// document.write(" number is " + value);
// document.write("  absolute value is " + absoluteValue)
//  _______________________________________________Question 4______________________________________________________________________________
// let diceValue = Math.floor(Math.random() * 6) + 1;

// document.write("Ramdom dice value: " + diceValue + "<br>")




//  _______________________________________________Question 5______________________________________________________________________________

// var player1= prompt("Enter Heads Name:")
// var player2= prompt("Enter Tails Name:")
 
// var toss = Math.random()*2
// var chToss = Math.floor(toss)



// if(chToss === 0){
//     document.write(player1+ " heads won" + "<br>")
// }else{
//     document.write(player2+ " tails won" + "<br>")
// }

//  _______________________________________________Question 6______________________________________________________________________________

// var random =  Math.floor(Math.random()*100)+1;
// document.write("random Value batween 1 to 100 is " + random +"<br>");

//  _______________________________________________Question 7______________________________________________________________________________

// var userInput = +prompt("enter your Weight");
// var weight=userInput;
// document.write(" The weight of a user is " + weight+ " Kilogram");
//  _______________________________________________Question 8______________________________________________________________________________
 var userInput= +prompt("Enter a  number 1 to 10")
var secretNumber = Math.floor(Math.random()*10 )+1;
 if ( secretNumber===userInput){
    document.write("You are winner")
 }else{
    document.write("Try again")
 }
