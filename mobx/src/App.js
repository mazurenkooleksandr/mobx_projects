import "./App.css";
import TodoList from "./todoList";
import AddTodo from "./addTodo";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default App;
