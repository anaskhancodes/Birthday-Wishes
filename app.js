function displayBirthdayWish() {
    // Get user's name from input
    let name = document.getElementById("nameInput").value;

    // Create a new paragraph element
    let paragraph = document.createElement("p");

    // Create a text node with the birthday wish message
    let message = document.createTextNode("Happy birthday, " + name + "! Wishing you a fantastic day filled with joy and celebration. May this special day be a reflection of the amazing person you are, and may it bring you countless moments of happiness and cherished memories. Here's to another year of growth, laughter, and all the wonderful things life has to offer. Enjoy every moment and make beautiful memories that will last a lifetime. Cheers to you,"+ name+", and may this birthday be the beginning of an incredible journey ahead.");

    // let el = document.createElement("div");el.classList

    // Append the text node to the paragraph element
    paragraph.appendChild(message);


    // Get the container div element
    let container = document.querySelector(".contaner");

    // Append the paragraph element to the container div
    container.appendChild(paragraph);

    // Add multiple styles to the paragraph element
    paragraph.style.color = "white";
    paragraph.style.fontFamily = "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    paragraph.style.fontSize = "20px";
    paragraph.style.paddingLeft = "30px";
    paragraph.style.paddingRight = "30px";
    paragraph.style.marginTop = "30px";
}


