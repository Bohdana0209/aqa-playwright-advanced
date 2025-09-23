function handleNum(num, evenNumber, oddNumber) {
    if (num % 2 === 0) {
        return handleEven(num);
    }

    return handleOdd(num);
}

function handleEven() {
    return "number is even";
}

function handleOdd() {
    return "number is odd";
}

console.log(handleNum(10, handleEven, handleOdd));