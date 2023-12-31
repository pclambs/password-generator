// character sets
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var userSelections = [];
var passwordLength = 8;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword () {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}  

function generatePassword () {
  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * userSelections.length)
    password = password + userSelections[randomIndex]
  }
  return password;
}  


function getPrompts () {
  userSelections = [];
  
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8-128 characters)"));
  
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number between 8 - 128 digits long. Please try again.");
    return false;
  }

  if (confirm("Do you want lower case letters?")) {
    userSelections = userSelections.concat(lower);
  }
  if (confirm("Do you want upper case letters?")) {
    userSelections = userSelections.concat(upper);
  }
  if (confirm("Do you want numbers?")) {
    userSelections = userSelections.concat(num);
  }
  if (confirm("Do you want special characters?")) {
    userSelections = userSelections.concat(special);
  }
  return true;
}