// Function to reverse a string
function reverseString(str) {
  let characters = str.split(""); // 1. Convert string to characters
  let reversedString = "";

  // 2. Loop in reverse direction
  for (let i = characters.length - 1; i >= 0; i--) {
    reversedString = reversedString + characters[i]; // 3. Concatenate
  }

  // 4. Print the reversed string
  console.log("Reversed string:", reversedString);

  return reversedString;
}

// Function to check palindrome
function isPalindrome(originalString) {
  let reversed = reverseString(originalString);

  // Check if original and reversed strings are same
  if (originalString === reversed) {
    return true;
  } else {
    return false;
  }
}

// Test the function with various strings
let testStrings = ["madam", "racecar", "hello", "level", "javascript"];

for (let i = 0; i < testStrings.length; i++) {
  let result = isPalindrome(testStrings[i]);
  console.log(
    "Is \"" + testStrings[i] + "\" a palindrome? :", result
  );
}
