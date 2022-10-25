let str = "A man, a plan, a canal: Panama";
str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

let findIfPalindrome = (strs) => {
  let checkString = strs.split("").reverse().join("");
  console.log(checkString);
  if (checkString === strs) {
    return `The string: ${strs} is a palindrome`;
  } else {
    return `The string: ${strs} is not a palindrome`;
  }
};
console.log(findIfPalindrome(str));
