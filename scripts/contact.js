// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submit = document.getElementById("submit-button");

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
function changeStyle(){
    let change = document.getElementById("contact-page");
    change.classList.add('large-text');
    change.innerHTML = 'Thank you for your message';
}

submit.addEventListener("click", changeStyle());
