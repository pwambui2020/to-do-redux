
import './App.css';
import DisplayTodos from './components/DisplayTodo';
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1>
        This is a To Do App
      </h1>
      <div>
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;
