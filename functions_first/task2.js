
function isPersonAdult(age) {
    if (age >= 18) {

        return true;
    }

    else {

        return false;
    }
}

console.log("Is person adult:", isPersonAdult(15));
console.log("Is person adult:", isPersonAdult(25));


// function isPersonAdult(age) {
//     if (age >= 18) {
//         console.log("Is person adult:", true);
//         return;
//     }

//     if (age < 18) {
//         console.log("Is person adult:", false);
//         return;
//     }

//     console.log("Enter just numbers");
// }

// isPersonAdult(15);
// isPersonAdult(25);