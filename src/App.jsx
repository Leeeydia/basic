import { useState } from "react"; 
import TodoList from './components/TodoList'
import './App.css'
  


function App() {
  return(
<main className="main-center">
<TodoList/>
    </main>
  )
}
export default App


// const [todos, setTodos] = useState([]);
// [상태 변화값, 변화시키기 위한 함수]
// 공부
