//your JS code here. If required.
function getMessage() {
    return new Promise((resolve) => {
        // Set a timeout to resolve the promise after 1 second
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}

// Call the function to get the message and update the output
getMessage().then(message => {
    // Update the text of the output element
    document.getElementById('output').innerText = message;
});