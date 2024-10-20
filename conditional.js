let a = prompt("What's your age?");

// Check if the prompt was canceled or left empty
if (a === null || a.trim() === "") {
  alert("You didn't enter anything!");
} else {
  a = Number.parseInt(a);
  
  // Check if the parsed value is a valid number
  if (!isNaN(a) && a > 0) {
    alert("true");
  } else {
    alert("Please enter a valid number greater than 0.");
  }
}
console.log("Done");
