function alphabetSort(message){
  var newMessage = message.split("").sort().join("")
  return newMessage
}
alphabetSort('hello'); // should return 'ehllo'