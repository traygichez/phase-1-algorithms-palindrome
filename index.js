function isPalindrome(str) {
    // Remove non-alphabetical characters and convert to lowercase
    str = str.replace(/[^a-z]/g, "").toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Examples:
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
