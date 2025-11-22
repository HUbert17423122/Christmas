function addGift() {
    // Get the title and URL values from the inputs
    const giftTitle = document.getElementById("giftTitle").value;
    const giftURL = document.getElementById("giftURL").value;

    // Validate if both fields have been filled
    if (!giftTitle || !giftURL) {
        alert("Please fill both fields: Gift Title and Product URL.");
        return;
    }

    // Create a new div to hold the gift title and URL
    const div = document.createElement("div");
    div.classList.add("outputDiv"); // Add styling class

    // Format the content of the div with the title and clickable URL
    div.innerHTML = `<strong>${giftTitle}</strong><br><a href="${giftURL}" target="_blank">${giftURL}</a>`;

    // Append the new div to the output container
    document.getElementById("outputContainer").appendChild(div);

    // Clear the input fields after adding the gift
    document.getElementById("giftTitle").value = "";
    document.getElementById("giftURL").value = "";
}
