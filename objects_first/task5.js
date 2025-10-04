const users = [
    {firstName: "Bohdana", lastName: "Chelombytko", age: 30}, 
    {firstName: "Ivan", lastName: "Ivanov", age: 20},
    {firstName: "Tom", lastName: "Soyer", age: 40}
];

 for (const {firstName, lastName, age} of users){
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log("----------");
 };