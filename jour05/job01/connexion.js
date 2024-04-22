// Description: This file is used to connect the user input to the output

/*  Escape user input to be treated as a literal string within a regular expression
    1. Get the user input
    2. Create a text node with the user input
    3. Append the text node to the output
*/
/*
let userInput = document.getElementById("userInput").value;
let textNode = document.createTextNode(userInput);
document.getElementById("output").appendChild(textNode);
*/
/* 
Securing user authentication and passwords is crucial to protect user data.
Here are some best practices:

1. **Use HTTPS**: Always use HTTPS for secure communication. 
This will encrypt the data between the client and the server, 
protecting it from eavesdroppers.

2. **Hash Passwords**: Never store passwords in plain text. 
Always hash and salt passwords before storing them. 
This ensures that even if your database is compromised, 
the attacker won't have access to the actual passwords.

3. **Enforce Strong Password Policies**: 
Require users to create strong passwords (a mix of uppercase, 
    lowercase, numbers, and special characters). 
    You can also check against common passwords and reject them.

4. **Use Two-Factor Authentication (2FA)**: 
2FA adds an extra layer of security by requiring users to provide two forms of identification. 
This could be something they know (password), something they have (phone), 
or something they are (fingerprint).

5. **Limit Login Attempts**: To prevent brute force attacks, 
limit the number of failed login attempts from a single IP address.

6. **Session Management**: Implement secure session management. 
Use secure, httpOnly cookies to store session IDs. 
Expire sessions after a period of inactivity.

7. **Password Reset**: Implement a secure password reset process. 
Don't reveal whether an email address is registered during the password reset process. 
Use one-time use tokens that expire quickly for password resets.

Remember, security is a multi-layered approach. 
These practices should be used in combination to provide the most secure user authentication and password management.
*/

/*
Securing front-end forms is crucial to prevent various types of attacks such as Cross-Site Scripting (XSS), 
SQL Injection, etc. 

Here are some best practices:

1. **Input Validation**: 
Validate user input on the client side as well as the server side. 
On the client side, you can use HTML5 validation attributes (like `required`, `pattern`) 
and JavaScript to enforce input patterns.

2. **Escape User Input**: 
Always escape user input to ensure that it's displayed as data and not interpreted as code.

3. **Use HTTPS**: 
Always use HTTPS for secure communication. 
This will encrypt the data between the client and the server, 
protecting it from eavesdroppers.

4. **CSRF Tokens**: Use Cross-Site Request Forgery (CSRF) tokens to protect against CSRF attacks. 
This involves including a hidden CSRF token in every form that can be verified on the server.

5. **Content Security Policy (CSP)**: 
Implement CSP to prevent XSS attacks. 
CSP allows you to specify the domains that the browser should consider to be valid sources of executable scripts.

6. **Limiting Data Exposure**: 
Only ask for the information you absolutely need. 
The less data you request, the less opportunity there is for a user to insert something harmful.

7. **Password Handling**: 
Never store passwords in plain text. 
Always hash and salt passwords. 
Also, enforce strong password policies to your users.

Remember, while these practices can enhance the security of your front-end forms, 
they can't replace back-end validation and sanitization. 
Always validate and sanitize data on the server-side.
*/


document.addEventListener("DOMContentLoaded", function(){
    var email_entry = document.getElementById("email");
    var email_error = document.getElementById("emailError");

    var password_entry = document.getElementById("password");
    var password_error = document.getElementById("passwordError");

    var submit_error = document.getElementById("submitError");

    email_entry.addEventListener("input", function(){
        const email = email_entry.value;
        VerifEmail(email);
    });

    password_entry.addEventListener("input", function(){
        const password = password_entry.value;
        VerifPassword(password);
    });

    function VerifEmail(email) {
        if (email.trim() === "") {
            email_error.innerHTML = "Veuillez renseigner ce champ";
            email_error.style.color = "red";
            submit_error.innerHTML = "Veuillez renseigner tous les champs";
            submit_error.style.color = "red";
        } else if (!email.includes("@")) {
            email_error.innerHTML = "Veuillez renseigner un email valide";
            email_error.style.color = "red";
            submit_error.innerHTML = "Veuillez renseigner tous les champs";
            submit_error.style.color = "red";
        } else if (!isValidEmail(email)) {
            email_error.innerHTML = "Veuillez renseigner un email valide avec une extension";
            email_error.style.color = "red";
            submit_error.innerHTML = "Veuillez renseigner tous les champs";
            submit_error.style.color = "red";
        } else {
            email_error.innerHTML = "";
            submit_error.innerHTML = "";
        }
    }
    
    function isValidEmail(email) {
        var atIndex = email.indexOf("@");
        var dotIndex = email.indexOf(".", atIndex);
        return dotIndex !== -1 && dotIndex !== email.length - 1;
    }
       

    function VerifPassword(password){
        if(password === ""){
            password_error.innerHTML = "Veuillez renseigner ce champ";
            password_error.style.color = "red";
            submit_error.innerHTML = "Veuillez renseigner tous les champs";
        }
        else if (password.length < 8){
            password_error.innerHTML = "Veuillez renseigner un mot de passe valide (au moins 8 caractères)";
            password_error.style.color = "red";
            submit_error.innerHTML = "Veuillez renseigner tous les champs";
        }
        else {
            password_error.innerHTML = "";
            submit_error.innerHTML = "";
        }
    }
});