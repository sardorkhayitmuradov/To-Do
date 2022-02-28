function getAll() {
    return JSON.parse(localStorage.getItem('todos')) || []
}

function setItem(info) {
    localStorage.setItem('todos', JSON.stringify(info))
}

function addTodo(todo) {
    const todos = getAll()
    const newTodos = [...todos, todo]
    setItem(newTodos)
}

function deleteTodo(id) {
    const todos = getAll()
    const newTodos = todos.filter(item => item.id !== id)
    setItem(newTodos)
}

function checkTodo(id, isCompleted) {
    const todos = getAll()
    const newTodos = todos.map(element => {
        if (element.id === id) {
            return { ...element, isCompleted }
        }
        return element
    })
    setItem(newTodos)
}

export { checkTodo, addTodo, deleteTodo, getAll, setItem }