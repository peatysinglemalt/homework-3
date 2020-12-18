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

// function and variable of possible strings 
function passwordCombination (lowercase, uppercase, numeric, special) {
  var passwordCombo = ' '; 
  
  var lowercase = 'abdcdefghijklmnopqrstuvwxyz'; 
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeric = '0123456789';
  var special = '!@#$%&*?.';
  var userInput = false;

  console.log ("User input includes: " + lowercase + uppercase + numeric + special)
  if (uppercase == true) {
    passwordCombo += uppercase; 
    userInput = true; 
    console.log("Uppercase character is required. password combination is: " + passwordCombo);
  }

  return passwordCombo; 
}

//1. function to confirm length of password
function confirmlength () {
  length = 0; 
// while loop for length of password between 8 and 128 
  while (length < 8 || length > 128) {
    var length = prompt("Choose between a minimun of 8 characters and no more than 128 characters."); 
    if (length < 8 || length > 128) {
      alert("Must enter a number between 8 to 128 characters"); 
    }
  }
  return length;
}
//2. create prompts to alert for useer input 
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
//3. after user selects prompts, function to confirm choices 
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

  alert("Click Ok to Generate Password"); 
  var gen = ''; 

  var passwordCombo = string(lowercase, uppercase, numeric, special); 
  console.log("Your Password Combination is: " + passwordCombo); 

  //utilizing math.random to generate a random password combination within the given range 
  for (i = 0; i < length; i++) {
    password = Math.floor(Math.random() * passwordCombo.length + 1); 
    gen += passwordCombo.charAt(password);
  }
  return gen; 

}



// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
