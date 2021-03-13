import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <br/>
      <h3 className="text-center">To Do App With ReactJS + Redux + Hooks</h3>
      <br/>
      <div className="row">
        <TodoInput/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
