/*Create Contact form using Javascript.

Contact Form fields
1. Name field text type
2. Email field email type
3.Message field text type


Write Javacsript code in form.js file to generate contact form in " form_sample" div.*/

window.onload = function(){
    let div = document.getElementById("form_sample");

let form = document.createElement("form");
form.setAttribute("method", "post");

div.appendChild(form);

let nameLabel = document.createElement('label');
nameLabel.innerHTML = "Name:";
form.appendChild(nameLabel);

let inputName = document.createElement("input");
inputName.setAttribute("type", "text");
//inputName.setAttribute("name", "Name");
form.appendChild(inputName);

//inputName.type = "text";
//inputName.name = "Name";

let breakLine1 = document.createElement('br');
form.appendChild(breakLine1);

let emailLabel = document.createElement('label');
emailLabel.innerHTML = "Email:";
form.appendChild(emailLabel);


let inputEmail = document.createElement("input");
inputEmail.setAttribute("type","email");
//inputEmail.setAttribute("name", "Email");
form.appendChild(inputEmail);
//inputEmail.type = "email";
//inputEmail.name = "Email";

let breakLine2 = document.createElement('br');
form.appendChild(breakLine2);

let messageLabel = document.createElement('label');
messageLabel.innerHTML = "Message:";
form.appendChild(messageLabel);

let inputMessage = document.createElement("input");
inputMessage.setAttribute("type", "text");
//inputMessage.setAttribute("name", "Message");

//inputMessage.type = "text";
//inputMessage.name = "Message";
form.appendChild(inputMessage);


}







