function reverseString(message){
    var newMessage = message.split("").reverse().join("");
    console.log(newMessage);
  }
  reverseString('hello'); // should return 'olleh'
  