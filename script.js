// 1. click the button to generate a password
// 2. prompts for password length 
// 3. Enter a length of at least 8 characters and no more than 128 characters
// 4. prompt for each of the following password combinations:
      // Include lowercase characters in the password? 
      // Include Uppercase characters in the password? 
      // Include numeric characters in the password? 
      // Include special characters in the password? 
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page 


// Assignment Code
var generateBtn = document.querySelector("#generate");


//1. prompts to alert useer input 
function confirmlength () {
  length = 0; 

  while (length < 8 || length > 128) {
    var length = prompt("Choose between a minimun of 8 characters and no more than 128 characters."); 
    if (length < 8 || length > 128) {
      alert("Must enter a number between 8 to 128 characters"); 
    }
  }
  return length;
}

function confirmlowercase () {
  var lowercase = confirm ("Include lowercase characters in the password?")
  return lowercase; 
}

function confirmuppercase () {
  var uppercase = confirm ("Include uppercase characters in the password?")
  return uppercase; 
}

function confirmnumeric () {
  var numeric = confirm ("Include numeric characters in the password?")
  return numeric; 
}

function confirmspecial () {
  var special = confirm ("Include special characters in the password?")
  return special; 
}

function generatePassword() {
  var lowercase = false; 
  var uppercase = false; 
  var numeric = false; 
  var special = false; 

  var length = confirmlength (); 

  while (lowercase == false && uppercase == false && numeric == false && special == false) {
    var lowercase = confirmlowercase(); 
    var uppercase = confirmuppercase(); 
    var numeric = confirmnumeric(); 
    var special = confirmspecial(); 

    if (lowercase == false && uppercase == false && numeric == false && special == false) {
      alert("Password must include at least one character type")
    }
  }



}
























// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
