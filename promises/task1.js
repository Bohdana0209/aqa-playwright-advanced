function printText(someText, delay) {
    return setTimeout(() => console.log(someText), delay);
}
printText("This another text should be shown", 5000);


// function showText(someText, delay) {
//     console.log("This text should be shown");
// }
// setTimeout(showText, 5000);