//Get button to pop up questions about criteria using prompts
//    Using Prompt and Confirm
//length 8-128 - check if valid
//lowercase, uppercase, numeric, special characters 
//Need at least 1 type of criteria to create password - Check if valid
//Run random generator
//post random password - *appears to be mostly done

// Assignment Code
var generateBtn = document.querySelector("#generate");
const uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lc = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symb = "!@#$%^&*_-+=";

//create generatePassword Function
function generatePassword() {
  var length = prompt ("How many characters would you like your password to contain?");

   
  //Do While loop!
  
  do {
    length = prompt ("Please choose a number between 8 and 128.")
  }
  while (length < 8 || length > 128)

  console.log (length);

  var uppercase = confirm ("Would you like to use Uppercase?");
  var lowercase = confirm ("Would you like to use Lowercase?");
  var numeric = confirm ("Would you like to use Numbers?");
  var specialChar = confirm ("Would you like to use Special Characters");
  if (uppercase && lowercase && numeric && specialChar) {

  // else if
  }

  return ("Generate Password will go here")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

