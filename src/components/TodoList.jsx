import React, { useState } from 'react'


const TodoList = () => {
  const sampleTodos = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Clean the house" },
  { id: 3, text: "Go for a run" },
  { id: 4, text: "Finish homework" },
  { id: 5, text: "Call mom" },
  { id: 6, text: "Buy groceries" },
  { id: 7, text: "Walk the dog" },
  { id: 8, text: "Read a book" },
  { id: 9, text: "Do laundry" },
  { id: 10, text: "Write code" },
  ]
  const [todos, setTodos] = useState(sampleTodos)
  const [todo, setTodo] = useState([])
  
  const handleChange=(event) => {
    console.log(event.target.value)
    setTodo(event.target.value)
  
  }
  const handleSubmit = () => {
    event.preventDefault();
  
    if(todo.trim().length ==0){
      alert('값을 입력해 주세요')
    return;  
  }  
    let newTodos = {
      id: crypto.randomUUID(),
      text : todo
    }
    setTodos([...todos,newTodos]);
    setTodo("")
  }

  return (
  
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="todo를 입력해주세요"
      onChange={handleChange}
      value={todo}/>
      <button>추가하기</button>
    </form>
    <ul>
    {todos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
  </div>
  )
}
export default TodoList