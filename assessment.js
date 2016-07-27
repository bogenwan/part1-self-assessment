console.log('Let\'s start Hacking!');

var string = 'Javascript is super duper awesome';
var myProfileObject = {};
var javaScriptArray = ['J', 'a', 'v', 'a'];

//use charAt methond to access the 4th charactor of the string
console.log(string.charAt(4));

//use for loop ot travers throught the string
// i will be the index
for(var i = 0; i < string.length; i++){
//console.log all index value of string
  console.log(string[i]);
};

//use while loop to travers through the string
//declare i to be 0 variable
var i = 0;
//set i to tarvers though the string and access each index 
while(i < string.length){
  //console.log all element index of string
  console.log(string[i]);
  	//incrament by 1 untill it reach the length count of string
    i++;
};

//use dot notation to set property school with value 'Telegraph Prep' in it
myProfileObject.school = 'Telegraph Prep';
//use bracket notation to set location property with value 'Berkeley, California'
myProfileObject['location'] = 'Berkeley, California';
//use dot notation to set property name to my name 'Johnny'
myProfileObject.name = 'Johnny';

//create an empty object
var info = {};
//function will take in an object and a string name
var nameObj = function(object, name){
 //it will assign string name to property name in the object
  object.name = name;
  /* will creat birth place and assign to object property value by useing bracket notation so 
  we can have spaces between property letters */
  object['place of birth'] = 'Hong Kong, China';
  //create a hobby property and assign my hobby to the value
  object.hobby = 'RC Cars';
  /*create a santence then use name.split and access the proper character to display the first and last name
  then return it to user*/
  return 'My first name is ' + name.split(' ')[0] + ' and my last name is ' + name.split(' ')[1]
};
//invoke nameObj
console.log(nameObj(info, 'Johnny Kwong'));
//check property and value in object
console.log(info);

//truthyName function will take in a name
//return a boolean
var truthyName = function(name){
  //check condition if input name match the object's name above that was created
  if(name === info.name){
  	//return true if correct
    return true
  }	  else{
  	//return false if not
  	    return false
      };
};
//check if the truthyName function works
console.log(truthyName('Johnny Kwong'));

//objLengthCheck function will take in an object
//then it will check and return the object length to user
var objLengthCheck = function(obj){
  //creat a counter
  var count = 0;
  //loop through the object
  for(var key in obj){
  	//for every property, update the counter
  	count++;
  };
  //return the counter number to user
  return count;
};
//tes the function
console.log(objLengthCheck(info))
//modArray function will take in a string
//out put an array with the letters javascript only
var modArray = function(string){
	//slice the string that repain javascript
	//then split method to create an array with all splitted by the letters
  return string.slice(0, 10).split("");
};

//test the function
console.log(modArray('javaScriptArray'));

//newArrayValue function will take in a string
//out put a array with value that pass in
var newArrayValue = function(string){
  //create an empty array
  var newArray = [];
  //slice the string then push it in to the array
  newArray.push(string.slice(0, 10));
  //return the new array back to user
  return newArray;
};
//test the function
console.log(newArrayValue('javaScriptArray'))




