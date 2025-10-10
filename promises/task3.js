async function fetchTodoById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) {
            throw new Error('Request failed');
    }
    const data = await response.json()
    return data;
} catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

async function fetchUserObjectById(id) {
    try{
        const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response2.ok) {
            throw new Error('Request failed');
    }
    const userData = await response2.json();
    return userData;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
  }
}

const responses = await Promise.all([fetchTodoById(1), fetchUserObjectById(2)]);
console.log(responses);

const firstResponse = await Promise.race([fetchTodoById(1), fetchUserObjectById(10)]);
console.log(firstResponse);