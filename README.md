## What this is
JavaScript: Password Generator

## Technology Used
JavaScript

## What you did

- created Password Generator that includes the combinations of lowercase, uppercase, numeric, and special characters  
- created prompt when Generate a Password is clicked on the webpage 
- prompts asks a user the following:
-   1. enter the length of desired password (between 8 through 128 character)
-   2. prompted to confirm desire for lowercase character 
-   3. prompted to confirm desire for uppercase character 
-   4. prompted to confirm desire for numeric character 
-   5. prompted to confirm desire for special character 
-   6. prompted to confirm desire for lowercase character 
- set the function, and determine the variables of a password string that includes lowercase, uppercase, number, and special characters
- utilized a while loop for confirm all answered prompts 
- utilized for loop to iterate over the length of the password 
- ultilized math.floor.math.random to generate password within the given criteria 
- the password is displayed on the page

## Code Snippets With context as to why you are highlighting it (Do not highlight every line of code)
Snippet of while loop and math.random code 

```
function string (lowercase, uppercase, numeric, special) {
  var passwordCombo = ' '; 
  
  var lowers = 'abdcdefghijklmnopqrstuvwxyz'; 
  var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numerics = '0123456789';
  var specials = '!@#$%&*?.';
  var userInput = false;
  
 --------------------------------------
  
    for (i = 0; i < length; i++) {
    password = Math.floor(Math.random() * passwordCombo.length + 1); 
    generate += passwordCombo.charAt(password);
  }
  return generate; 
```

## Who You Are (links to your LinkedIn & Portfolio - if one exists)
[LinkedIn](https://www.linkedin.com/in/matthewywu/)

## Website

[Link to webpage](https://peatysinglemalt.github.io/homework-3/)

## Screenshots

![screenshot 1](https://github.com/peatysinglemalt/homework-3/blob/main/Assets/Screen%20Shot%202020-12-18%20at%2016.25.12.png)
![screenshot 2](https://github.com/peatysinglemalt/homework-3/blob/main/Assets/Screen%20Shot%202020-12-18%20at%2016.25.24.png)
![screenshot 3](https://github.com/peatysinglemalt/homework-3/blob/main/Assets/Screen%20Shot%202020-12-18%20at%2016.25.38.png)

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
