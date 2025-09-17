const averageGrade = 79;

switch(true) {
    case averageGrade < 60:
        console.log("Твій результат:", "Незадовільно");
        break;
    case averageGrade <= 70:
        console.log("Твій результат:", "Задовільно");
        break;
    case averageGrade <= 80:
        console.log("Твій результат:",  "Добре");
        break;
    case averageGrade <= 90:
        console.log("Твій результат:", "Дуже добре");
        break;
    case averageGrade <= 100:
        console.log("Твій результат:", "Відмінно");
        break;
    default:
        console.log("Перевірте дані");
}

