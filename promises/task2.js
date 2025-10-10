function fetchTodoById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

function fetchUserObjectById(id) {
     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

Promise.all([fetchTodoById(1), fetchUserObjectById(2)])
    .then (responses => {
        console.log('Promises all :', responses)
    })
    .catch(err => console.log(err));

Promise.race([fetchTodoById(1), fetchUserObjectById(10)])
    .then (response => {
        console.log('Promises race :', response)
    })
    .catch(err => console.log(err));

