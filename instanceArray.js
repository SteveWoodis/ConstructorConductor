/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];
var user1 = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var user2 = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var user3 = new User('Lenny', 'lenny@thelenster.com', 'iLoveLentilSoup');

//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  //code here
users.push(user1);
users.push(user2);
users.push9user3);

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  //code here
console.log('name = ' + users[0].name);
console.log('email = ' + users[0].email);
console.log('pw = ' + users[0].pw);


console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here
console.log('name = ' + users[2].name);
console.log('email = ' + users[2].email);
console.log('pw = ' + users[2].pw);


//Now create another instance of User using your own information and then add that to your users array.

  //code here
var user4 = new User('Steve', 'swoodis2010@gmail.com', 'himmel');
users.push(user4);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  //code here
for(var i = 0; i < users.length; i++){
 console.log('name = ' + users[i].name);
console.log('email = ' + users[i].email);
console.log('pw = ' + users[i].pw);   
}
    