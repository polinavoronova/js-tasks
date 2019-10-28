//Напишите функцию, которая возвращает массив слов, очищенный от анаграмм.

let arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function removeAnogramms(array) {
    let sortedWords = [];
    let result = [];
    
    for (word of array) {
        let sortedWord = word.toUpperCase().split('').sort().join('');
        if (!sortedWords.includes(sortedWord)) {
            sortedWords.push(sortedWord);
            result.push(word);
        }
    }

    return result;
}