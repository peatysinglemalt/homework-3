## What this is
JavaScript: Password Generator

## Technology Used
JavaScript

## What you did

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

## Code Snippets With context as to why you are highlighting it (Do not highlight every line of code)
Snippet of while loop between length of password

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
