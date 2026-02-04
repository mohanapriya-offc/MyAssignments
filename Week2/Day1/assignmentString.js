/***********************
 PART 1: Length of Last Word
************************/

function lengthOfLastWord(str) {
  // Remove leading and trailing spaces
  let trimmedString = str.trim();

  // Split the string into words
  let words = trimmedString.split(" ");

  // Get the last word
  let lastWord = words[words.length - 1];

  // Return the length of the last word
  return lastWord.length;
}

// Test cases for Part 1
console.log("Length of last word:");
console.log("Hello World: "+lengthOfLastWord("Hello World"));          // Output: 5
console.log(" fly me to the moon : "+lengthOfLastWord(" fly me to the moon ")); // Output: 4


/***********************
 PART 2: Anagram Check
************************/

function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase
  let cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  let cleanStr2 = str2.replace(/\s/g, "").toLowerCase();

  // Sort characters of both strings
  let sortedStr1 = cleanStr1.split("").sort().join("");
  let sortedStr2 = cleanStr2.split("").sort().join("");

  // Compare sorted strings
  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }
}

// Test cases for Part 2
console.log("\nAnagram Check:");
console.log("Is listen & silent - Anagram? "+isAnagram("listen", "silent")); // Output: true
console.log("Is hello & world - Anagram? "+isAnagram("hello", "world"));   // Output: false
