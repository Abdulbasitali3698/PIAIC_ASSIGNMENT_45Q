"use strict";
//console.log("Hello world");
//Personal Message: Store a person’s name in a variable, and print a message to that person.
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//let persnName:string="Basit";
//console.log("Hello",persnName,"would you like to learn some typescript today?");
//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
/*let nam:string="Abdul Basit Ali";
console.log(nam);
let lowernam:string=nam.toLowerCase();
console.log(lowernam);
let uprnam:string=lowernam.toUpperCase();
console.log(uprnam);
let words:string[]=nam.split("");
let titlname:string="";
for (let index = 0; index < words.length; index++) {

    titlname=words[index].charAt(0).toUpperCase() +words[index].slice(1).toLowerCase()+"";
}
console.log(titlname);*/
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//let quote:string="The greastest Jihad is to battle your own soul,to fight the evil within yourself";
//console.log("Prophet Muhammad said:",quote);
//amous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.
/*var famous_person:string="Hazrat Muhammad Said:";
var message=famous_person+ "The greastest Jihad is to battle your own soul,to fight the evil within yourself";
console.log(message);
*/
//stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed.
//Then print the name after striping the white spaces.
/*let personName:string="\t     Abdul Basit Ali     \n";
console.log("Name with whitespace",personName);
console.log(personName.trim());
*/
//Number Eight: Write addition, subtraction, multiplication,
//and division operations that each result in the number 8. 
//Be sure to enclose your operations in print statements to see the results.
/*let addition:number=4+4;
console.log(addition);

let subtraction:number=12-4;
console.log(subtraction);

let multiplication:number=4*2;
console.log(multiplication);
-
let division:number=16/2;
console.log(division);
*/
//Favorite Number: Store your favorite number in a variable. 
//Then, using that variable, create a message that reveals your favorite number. Print that message.
/*let favNum=7;
let message:string=`my favorite number is: ${favNum}`;
console.log(message);*/
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. 
//Then write one sentence describing what the program does.
// let myName:string="Abdul Basit Ali"; //my name
// let date:number=12-9-2023;
// console.log(`My name is: ${myName}. and today is: ${date}date`);
//Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
// let friendName:string[]=["bilal","asad","ali","asif","basit",];
// console.log(friendName);
// console.log(friendName[0]);
// console.log(friendName[1]);
// console.log(friendName[2]);
// console.log(friendName[3]);
// console.log(friendName[4]);
// for (let index = 0; index < friendName.length; index++) {
//     console.log(friendName[index]);
// }
//Start with array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.
// let friendNames:string[]=["basit","asad","bilal","ali","ahmed"];
// for (let index = 0; index < friendNames.length; index++) {
//     console.log(`hello:${friendNames[index]} hope you will be fine my friend`);
// }
//Your Own Array:Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples.
//Use your list to print a series of statements about these items,
//such as “I would like to own a Honda motorcycle.”
// let favitems:string[]=["bike","car","jeep",];
// for (let index = 0; index < favitems.length; index++) {
//     console.log(`I would like to have a ${favitems[index]}`);
// }
//Guest List:
//If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner
//  let invitedPerson:string[]=["bilal","ali","ahmad"]
//  for (let index = 0; index < invitedPerson.length; index++) {
//     console.log(`hello: ${invitedPerson[index]} you are invited at dinner with me`);
//  }
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.
//   let invited_Person:string[]=["bilal","ali","ahmad"]
//   console.log(invited_Person);
//   let Person_not_attend:string="ali";
//   console.log(Person_not_attend,"not join our dinner");
//   invited_Person.splice(1,1,"asif");
//   console.log(invited_Person);
//  for (let index = 0; index < invited_Person.length; index++) {
//     console.log(`hello: ${invited_Person[index]} you are invited at dinner with me`);
//  }
// More Guests: You just found a bigger dinner table, so now more space is available.Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// let invited_Person:string[]=["bilal","ali","ahmad"];
// invited_Person.unshift("asif");
// console.log(invited_Person);
// invited_Person.splice(invited_Person.length/2,0,"asad");
// console.log(invited_Person);
// invited_Person.push("saif");
// console.log(invited_Person);
// invited_Person.forEach(Element=>console.log(`Hello ${Element} you are invited at bigger dinner table`));
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// let invited_Person:string[]=["bilal","ali","ahmad","asad","saif","hasan"];
// console.log(invited_Person);
// console.log("sorry for inconvinence,only two person are invited shrink your list");
// invited_Person.splice(0,2,);
// invited_Person.forEach((reason)=>console.log(`hello ${reason} you are not invited due to some reason`));
// invited_Person.splice(0,4,"bilal","ali")
// console.log(invited_Person);
// for (let index = 0; index < invited_Person.length; index++) {
//     console.log(`hello ${invited_Person[index]} you are still invited`);
// }
// invited_Person.splice(0,2,);
// console.log(invited_Person);
// //Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// let fav_places:string[]=["naran","kashmir","hunza","london","islamabad"];
// console.log(fav_places);
// console.log([...fav_places].sort());
// console.log(fav_places);
// console.log("reversealphabatical order");
// let revers_order:string[]=[...fav_places].sort().reverse();
// console.log(revers_order);
// console.log("original array");
// console.log(fav_places);
// console.log("reverse");
// console.log([...fav_places].reverse());
// console.log("ptint back its original state");
// console.log(fav_places);
// console.log(fav_places.sort());
// console.log("reverse alphabetical order");
// console.log(fav_places.reverse());
//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
// let invited_Person:string[]=["bilal","ali","ahmad","asad","saif","hasan"];
// console.log("no one is ivited to the dinner",invited_Person.length);
// Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.
//  let languages:string[]=["urdu","punjabi","english","pashto","sindhi","saraiki"];
//  console.log(languages);
//  for (let index = 0; index < languages.length; index++) {
//     console.log(languages[index]);
//  }
//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.
// var student={
//   name:"basit",
//   rollno:"09",
//   course:"IT",
// }
// console.log(student);
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error.
//Make sure you correct the error before closing the program.
// let course:string[]=["IT","CS","SE","AI"]
// console.log("index error",course[5]);
// console.log("error coorect,value of giving index is:",course[3]);
/*Conditional Tests: Write a series of conditional tests.
//Print a statement describing each test and your prediction for the results of each test.
// Your code should look something like this:*/
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.                              
// let cars='BMW';
// console.log("is cars=='BMW'? I am true");
// console.log(cars=='BMW');
// console.log("is cars=='HONDA'? I am true");
// console.log(cars=='honda');
// console.log("is cars==='BMW'? I am true");
// console.log(cars==='BMW');
// console.log("is cars==='HONDA'? I am true");
// console.log(cars==='honda');
// console.log("is cars!='BMW'? I am true");
// console.log(cars!='BMW');
// console.log("is cars!='HONDA'? I am true");
// console.log(cars!='honda');
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// let nam:string="Abdul Basit Ali"
// console.log(nam=="Abdul Basit Ali");
// // • Tests using the lower case function
// let nam1:string="Abdul Basit Ali"
// let nam2:string="abdul basit ali"
// console.log(nam1.toLowerCase()==nam2);
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//  let num:number=16;
//  console.log(`numer is greater than ${num>30}`);
//  console.log(`numer is greater than ${num>=16}`);
//  console.log(`numer is greater than ${num>=30}`);
//  console.log(`numer is greater than ${num<30}`);
//  console.log(`numer is greater than ${num<=30}`);
// // • Tests using "and" and "or" operators
// console.log("using AND operation");
// console.log(num>10 && num<20);
// console.log("using OR operation");
// console.log(num>10 || num<20);
// // • Test whether an item is in a array
// let alphabet:string[]=["a","b","c","d"];
// console.log(alphabet.includes("b"));
// // • Test whether an item is not in a array
// let alphabets:string[]=["a","b","c","d"];
// console.log(alphabets.includes("f"));
// // Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color 
// //and assign it a value of 'green', 'yellow', or 'red'.
// let alien_color:string="green";
// // • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// if(alien_color=="green"){
//   console.log("you have earned 5 points");
// }
// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// else{
//   console.log("try again you are failed");
// }
// // Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// // • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// if(alien_color=="green"){
//   console.log("you have earned 5 points");}
// // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// else if(alien_color=="red"){
//   console.log("ypu have earned 10 points");
// }
// // • Write one version of this program that runs the if block and another that runs the else block.
// else{
//   console.log("you have no points try again");
// }
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// let alien_color:string="green";
// // • If the alien is green, print a message that the player earned 5 points.
// if(alien_color=="green"){
//    console.log("you have earned 5 points");
//  }
// // • If the alien is yellow, print a message that the player earned 10 points.
// else if(alien_color=="yellow"){
//    console.log("you have earned 10 points");
//  }
// // • If the alien is red, print a message that the player earned 15 points.
//  else if(alien_color=="red"){
//    console.log("you have earned 15 points");
//  }
// // • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// else{
//   console.log("try again you have'nt earned any point");
// }
// stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// let age:number=25;
// // • If the person is less than 2 years old, print a message that the person is a baby.
//     if(age<2)
//     {
//       console.log("person is a baby");
//     }
// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//     else if(age<=2 && age<4)
//     {
//       console.log("person is a toddler");
//     }
// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// else if(age<=4 && age<13)
//     {
//       console.log("person is a kid");
//     }
// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// else if(age<=13 && age<20)
//     {
//       console.log("person is a teenager");
//     }
// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// else if(age<=20 && age<65)
//     {
//       console.log("person is a adult");
//     }
// // • If the person is age 65 or older, print a message that the person is an elder.
// else if(age<=65 && age>65)
//     {
//       console.log("person is a elder");
//     }
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//if statements that check for certain fruits in your array.
//•Make a array of your three favorite fruits and call it favorite_fruits.
//•Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, 
//the if block should print a statement, such as You really like bananas!
// let fruits:string[]=["apple","banana","grapes","mango","peach"];
// let favorite_fruits:string[]=["apple","banana","peach"]
// for (let index = 0; index < favorite_fruits.length; index++) {
//   if(fruits.includes(favorite_fruits[index])){
//     console.log(`${favorite_fruits[index]} is my favorite fruit`);
//   }
// }
// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// // Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// let username:string[]=["user","employee","admin","access","audit"];
// // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// username.forEach((reason) =>{
// if (reason=="admin") 
// {
//   console.log("Hello admin, would you like to see a status report?");
// }
// // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//   else{
//     console.log("Hello Eric, thank you for logging in again.");
//   }
// })
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let username:string[]=["user","employee","admin","access","audit"];
// username.forEach((reason)=>{
//   console.log(`hello ${reason} :thanks for loging`);
// })
// username.splice(0,username.length,)
// if(username.length==0){
//   console.log("list is empty we find some users");
// }
// else{
//   console.log("length is not zero");
// }
// Checking Usernames: Do the following to create a program that simulates 
//how websites ensure everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// let current_users:string[]=["saif","asif","asad","bilal","ahmad","ali"];
// console.log(current_users);
// // • Make another list of five usernames called new_users. 
// //Make sure one or two of the new usernames are also in the current_users list.
// let new_users:string[]=["wasif","Saif","noor","Ali","hamza","qaisar"];
// console.log(new_users);
// // • Loop through the new_users list to see if each new username has already been used.
// // If it has, print a message that the person will need to enter a new username.
// // If a username has not been used, print a message saying that the username is available.
// // • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// function Checking_number(current_users:string[],new_users:string[]):void {
//   const username=current_users.map((user)=>user.toLowerCase());
//   for(const newuser of new_users){
//     const lowercaseusername=newuser.toLowerCase();
//     if(username.includes(lowercaseusername)){
//       console.log(`you user name ${username}is already taken`);
//     }
//     else{
//       console.log(`you user name ${username} is available`);
//     }
//   }
// }
// Checking_number(current_users,new_users);
// // Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// // • Store the numbers 1 through 9 in a array.
// let num:number[]=[1,2,3,4,5,6,7,8,9]
// console.log(num);
// // • Loop through the array.
// // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th
// num.map((numbr)=>{
//   if(numbr==1){
//     console.log(`your number is ${numbr}st`)
//   }
//   else if(numbr==2){
//     console.log(`your number is ${numbr}nd`)
//   }
//   else if(numbr==3){
//     console.log(`your number is ${numbr}rd`)
//   }
//   else {
//     console.log(`your number is ${numbr}th`)
//   }
// }
// // )
// // Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// let pizza:string[]=["Malai Boti","Supreme","Fajita","Tikka"];
// console.log(pizza);
// // • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// for (let index = 0; index < pizza.length; index++) {
//   let pizza_list=pizza[index];
//   console.log(`i like ${pizza_list} pizza`);
// }
// // • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// console.log("Pizza is one of my favorite dishes. It is originally from Italy and now eaten in most of the countriesThere are many types of Pizzas with different flavors and tastes. I love Veg-pizza with extra cheese.There are many famous brands like Dominos, PizzaHut which make pizzas.");
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animal = ["Dog", "Cat", "Parrot"];
console.log(animal);
for (let index = 0; index < animal.length; index++) {
    let fav_animal = animal[index];
    console.log(`these animals ${fav_animal} have common qulalities`);
}
