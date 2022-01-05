function isPalindrome(word) {
  // Write your algorithm here
  let reverse = word.split("").reverse().join("")
  if (reverse === word){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  convert word into array, reverse it, convert to string and save to variable
  if variable matches input, return true
*/

/*
  Add written explanation of your solution here
  Take the string and split it into an array of letters,
  reverse those letters and join them into a string,
  if reversed string equals input, return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false")
  console.log("=>", isPalindrome("guitar"));

  console.log("Expecting: true")
  console.log("=>", isPalindrome("maz zam"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
