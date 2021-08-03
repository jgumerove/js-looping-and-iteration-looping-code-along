// Code your solutions in this file

const cards = [ 'Lisa', 'Kaitlin', 'Jan' ];
const string = "surprise"
function writeCards(array, string) {
    const newArray = []
    for(let i = 0 ; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}

writeCards(cards, string);

function countDown(number){
    while (number >= 0){
    console.log(number--)
    }
}