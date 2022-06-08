function palindrome(message){
  var reverseMessage = message.split("").reverse().join("");
  return reverseMessage === message ? true : false;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
