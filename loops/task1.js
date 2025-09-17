const averageGrade = 89;

if (averageGrade < 60) {
    console.log("Твій результат:", "Незадовільно");
} else if (averageGrade <= 70) {
    console.log("Твій результат:", "Задовільно");
} else if (averageGrade <= 80) {
    console.log("Твій результат:", "Добре");
} else if (averageGrade <= 90) {
    console.log("Твій результат:", "Дуже добре");
} else if (averageGrade <= 100) {
    console.log("Твій результат:", "Відмінно");
} else {
    console.log("Перевірте дані");
}