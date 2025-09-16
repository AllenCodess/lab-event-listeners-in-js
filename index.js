// Handle Button Clicks

// Function to change the background color
function changeBackgroundColor() {
  const newBackgroundColor = "red"; // store the color "red" in a variable

  document.body.style.backgroundColor = newBackgroundColor; // set the page background to red

  const colorElement = document.createElement("p"); // create a new <p> element in memory

  colorElement.textContent = newBackgroundColor; // put the text "red" inside the <p>

  const button = document.getElementById("changeColorButton"); // find the button with id="changeColorButton"

  button.insertAdjacentElement("afterend", colorElement); // insert the <p> right after the button
  // end of changeBackgroundColor function
}

// Find the Change Color button, and run changeBackgroundColor when it’s clicked
document.getElementById("changeColorButton").addEventListener("click", changeBackgroundColor);

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  const resetBackgroundColor = "white"; // store the color "white" in a variable

  document.body.style.backgroundColor = resetBackgroundColor; // set the page background to white

  const colorElement = document.createElement("p"); // create a new <p> element in memory

  colorElement.textContent = resetBackgroundColor; // put the text "white" inside the <p>

  const button = document.getElementById("resetColorButton"); // find the button with id="resetColorButton"

  button.insertAdjacentElement("afterend", colorElement); // insert the <p> right after the Reset button
  // end of resetBackgroundColor function
}

// Find the Reset Color button, and run resetBackgroundColor when it’s clicked
document.getElementById("resetColorButton").addEventListener("click", resetBackgroundColor);

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const displayParagraph = document.getElementById("keyPressDisplay"); // find the <p> where we’ll show the key
  displayParagraph.textContent = "You pressed: " + event.key; // update text to show the key
  // Implement the function to display key pressed
}
document.addEventListener("keydown", displayKeyPress);

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
   const inputText = event.target.value; // get what the user typed
  const displayParagraph = document.getElementById("textInputDisplay"); // find the <p>
  displayParagraph.textContent = inputText; // update <p> with the typed text
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}