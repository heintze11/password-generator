//Get button to pop up questions about criteria using prompts


// Assignment Code
// establish variables
//lowercase, uppercase, numeric, special characters 
let generateBtn = document.querySelector("#generate");
const uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symb = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
let passwordArray = [];
let password = [];

//create generatePassword Function
function generatePassword() {
  //Prompt for input values
  let length = prompt ("How many characters would you like your password to contain?");
   
  //length 8-128 - check if valid
  //Do While loop for length
  if (length < 8 || length > 128) {
    do {
     length = prompt ("Please choose a number between 8 and 128.")
    }
    while (length < 8 || length > 128)
  }

  // Confirm for character types
  let uppercase = confirm ("Would you like to use Uppercase?");
  let lowercase = confirm ("Would you like to use Lowercase?");
  let numeric = confirm ("Would you like to use Numbers?");
  let specialChar = confirm ("Would you like to use Special Characters");

  //Need at least 1 type of criteria to create password - Check if valid
  // If all are null, please try again
  if (!uppercase && !lowercase && !numeric && !specialChar) {
    alert ("Please select at least one type of character. Please try again.")
    return ("Please select one character type")
  } 
  // create if statements to push array to new array if true
  if (uppercase){
     passwordArray=passwordArray.concat(uc) 
    } 
  if (lowercase){
    passwordArray=passwordArray.concat(lc)
  }
  if (numeric){
    passwordArray=passwordArray.concat(num)
  }
  if (specialChar){
    passwordArray=passwordArray.concat(symb)
  }
 
  // use for loop to pull random variables "length" number of times
  //post random password to password
  for (let index = 0; index < length; index++) {
    password.push(passwordArray[Math.floor(Math.random()*passwordArray.length)])
  }
 
  passwordArray = [];
  return (password)
}

// Write password to the #password input
function writePassword() {
  var passwordDisplay = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordDisplay;
  // clear password for next use
  password = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



