// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// character sets
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var userSelections = [];
var passwordLength = 12;

// do you want upper cass?
var wantsUpper = confirm("do you want upper case?")
if (wantsUpper) { 
  userSelections = userSelections.concat(upper)
  // combine arays
}


// do you want lower case
var wantsLower = confirm("do you want lower case?")
if (wantsLower) { 
  userSelections = userSelections.concat(lower)
  // combine arays
}

console.log(userSelections)
// if yess
// combine arrays

// do you want special characters

// prompt for length of password
  // store var

for (var i = 0; i < passwordLength; i++) {
  var rand = Math.floor(Math.random() * userSelections.length)
  console.log(userSelections[rand])
}