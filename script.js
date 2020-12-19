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
// 5. THEN the password is either displayed in an alert or written to the page 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//1. create function to confirm length of password and generate a prompt message
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

//2. create prompts to user to confirm the following variables 
function confirmlowercase() {
  var lowercase = confirm("Include lowercase characters in the password?")
  return lowercase; 
}
function confirmuppercase() {
  var uppercase = confirm("Include uppercase characters in the password?")
  return uppercase; 
}
function confirmnumeric() {
  var numeric = confirm("Include numeric characters in the password?")
  return numeric; 
}
function confirmspecial() {
  var special = confirm("Include special characters in the password?")
  return special; 
}

//3. create variables of character types for password combinations  
function string (lowercase, uppercase, numeric, special) {
  var passwordCombo = ' '; 
  
  var lowers = 'abdcdefghijklmnopqrstuvwxyz'; 
  var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numerics = '0123456789';
  var specials = '!@#$%&*?.';
  var userInput = false;

  console.log ("User input includes: " + lowercase + ", " + uppercase + ", " + numeric + ", " + special)
  
  if (lowercase == true) {
    passwordCombo += lowers; 
    userInput = true; 
  }

  if (uppercase == true) {
    passwordCombo += uppers; 
    userInput = true; 
  }

  if (numeric == true) {
    passwordCombo += numerics; 
    userInput = true; 
  }

  if (special == true) {
    passwordCombo += specials; 
    userInput = true; 
  }

  return passwordCombo;
}

//4. after user confirm prompts, function to generate password 
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
      alert("Password must include one of the following character types: uppercase, lowercase, numeric, special.")
    }
  }

  alert("Click OK to Generate Password"); 
  var generate = ''; 

  var passwordCombo = string(lowercase, uppercase, numeric, special); 

//5. utilize math.random to generate a random password combination within the given variables  
  for (i = 0; i < length; i++) {
    password = Math.floor(Math.random() * passwordCombo.length + 1); 
    generate += passwordCombo.charAt(password);
  }
  return generate; 
}





