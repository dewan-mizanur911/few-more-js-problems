const myString = 'Hello, how are you?'
function reverseString(text){
    let newReversedString = '';
    for(const letter of text){
        newReversedString = letter + newReversedString;
    }
    return newReversedString;
}
const reversed = reverseString(myString);
console.log(reversed);