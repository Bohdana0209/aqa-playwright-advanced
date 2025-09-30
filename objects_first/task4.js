const person = {
    firstName: "Bohdana",
    lastName: "Chelombytko",
    age: 30
}
person.email = "bohdana@gmail.com";
delete person.age;

console.log(person);