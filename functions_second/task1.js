function handleNum(num, evenNumber, oddNumber) {
    if (num % 2 === 0) {
        return evenNumber(num);
    }

    return oddNumber(num);
}

function onEvenNumber() {
    return "number is even";
}

function onOddNumber() {
    return "number is odd";
}

console.log(handleNum(13, onEvenNumber, onOddNumber));