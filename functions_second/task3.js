function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Ділення на нуль недопустиме!");
    }

    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Аргументи мають бути числом");
    }

    return numerator / denominator;
}

try {
  const result = divide(10, 5);
  console.log(result); 
} catch (error) {
  console.error("Сталася помилка:", error.message);
} finally {
   console.log("Робота завершена");
}
