import React, { useState } from "react";

const sampleTodos = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(sampleTodos);

  const [todo, setTodo] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!todo.trim()) {
      return;
    }

    setTodos([{ id: crypto.randomUUID(), text: todo }, ...todos]);
    setTodo("");
  };
  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          completed: !todo.completed,
        };

        return newTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="todo를 입력해주세요"
          onChange={handleChange}
          value={todo}
        />
        <button>추가하기</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>
              {todo.text} - {String(todo.completed)}
            </p>
            <button
              onClick={() =>
                toggleCompleted(todo.id, todo.text, todo.completed)
              }
            >
              완료
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;

// 업데이트 togg
