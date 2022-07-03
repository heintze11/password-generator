//Get button to pop up questions about criteria using prompts
//    Prompt and Confirm
//length 8-128 - check if valid
//lowercase, uppercase, numeric, special characters 
//Need at least 1 type of criteria to create password - Check if valid
//Run random generator
//post random password - appears to be done

// Assignment Code
var generateBtn = document.querySelector("#generate");
// const lowercase = [];
// const uppercase = [];
// const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const specialChar = [`~`, `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `_`, `-`, `+`, `=`, `{`, `[`, `}`, `]`, `|`, `\`, `:`, `;`, `<`, `,`, `>`, `.`, `?`, `/` ];

//create generatePassword Function
function generatePassword() {
  var length = prompt ("How many characters would you like your password to contain?");
  var uppercase = confirm ("Would you like to use Uppercase?")
  var lowercase = confirm ("Would you like to use Lowercase?")
  var numeric = confirm ("Would you like to use numbers?")
  var specialChar = confirm ("Would you like to use Special Characters")


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

