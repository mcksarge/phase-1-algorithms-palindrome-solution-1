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
  convert word into array, reverse it and save to variable
  convert reverse array into string
  if string read forward equals input backwards, return true
*/

/*
  Add written explanation of your solution here
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
