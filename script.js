// ======================
// Part 1: Variables and Conditionals
// ======================

// Select elements from the DOM needed for part 1
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

// Add click event listener to the "Check Age" button
checkAgeBtn.addEventListener("click", function () {
  // Get the age entered by the user, convert to number
  const age = Number(ageInput.value);

  // Check if input is valid
  if (isNaN(age) || age <= 0) {
    // Show error if not a positive number
    ageResult.textContent = "Please enter a valid positive number.";
  } else if (age < 18) {
    // Age less than 18 is considered minor
    ageResult.textContent = "You are a minor.";
  } else {
    // Age 18 or above is adult
    ageResult.textContent = "You are an adult.";
  }
});

// ======================
// Part 2: Functions — Reusable Logic
// ======================

// Function to calculate sum of two numbers, returns the result
function calculateTotal(a, b) {
  return a + b;
}

// Function to format a message string with a name and total value
function formatMessage(name, total) {
  return `Hello, ${name}! Your total is ${total}.`;
}

// Select elements for Part 2 inputs and outputs
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calcTotalBtn = document.getElementById("calcTotalBtn");
const totalResult = document.getElementById("totalResult");

// Event listener for calculate total button
calcTotalBtn.addEventListener("click", function () {
  // Convert input values to numbers
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);

  // Validate inputs
  if (isNaN(num1) || isNaN(num2)) {
    totalResult.textContent = "Please enter valid numbers.";
    return; // Exit early if invalid
  }

  // Calculate total using reusable function
  const total = calculateTotal(num1, num2);
  // Format message using reusable function
  const message = formatMessage("User", total);
  // Display the formatted message
  totalResult.textContent = message;
});

// ======================
// Part 3: Loops — Repetition and Iteration
// ======================

// Select button and list container for Part 3
const showListBtn = document.getElementById("showListBtn");
const itemList = document.getElementById("itemList");

// Sample array of fruits to display
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Event listener for showing the fruit list
showListBtn.addEventListener("click", function () {
  itemList.innerHTML = ""; // Clear any existing list items

  // Use a for loop to iterate over fruits array
  for (let i = 0; i < fruits.length; i++) {
    // Create a new list item element
    const li = document.createElement("li");
    // Set the text content to the current fruit
    li.textContent = fruits[i];
    // Append the list item to the unordered list
    itemList.appendChild(li);
  }

  /* Alternative: using forEach loop to do the same
  fruits.forEach(function (fruit) {
    const li = document.createElement("li");
    li.textContent = fruit;
    itemList.appendChild(li);
  });
  */
});

// ======================
// Part 4: DOM Manipulation and Event Handling
// ======================

// Select button and paragraph for dark mode toggling and click counting
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const clickCountP = document.getElementById("clickCount");

// Initialize click count variable
let clickCount = 0;

// Add click event listener to toggle dark mode
toggleThemeBtn.addEventListener("click", function () {
  // Toggle 'dark-mode' class on body element to switch styles
  document.body.classList.toggle("dark-mode");

  // Increment click counter
  clickCount++;
  // Update paragraph text to show how many times button was clicked
  clickCountP.textContent = `Button clicked ${clickCount} times`;
});
