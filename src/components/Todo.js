import { useState, useEffect } from 'react';
import './Home.css';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, [skip]);

  const fetchTodos = async () => {
    const response = await fetch(`https://dummyjson.com/todos?limit=20&skip=${skip}`);
    const data = await response.json();
    setTotal(data.total);
    setTodos(prev => [...prev, ...data.todos]);
  };

  const handleLoadMore = () => {
    setSkip(prev => prev + 20);
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

    const toggleComplete = (id) => {
     setTodos(prev =>
       prev.map(todo =>
         todo.id === id ? { ...todo, completed: !todo.completed } : todo
       )
     );
   }; 

   const addTodo = () => {
    if (newTodo.trim() === '') return;

    setTodos(prev => {
        if(prev.some(todo => todo.todo === newTodo)) {
            return prev; // Return previous state if duplicate exists
        }
        const newTodoItem = { id: prev.length + 1, todo: newTodo, completed: false };
        return [...prev, newTodoItem];
    });
    setNewTodo('');
   };


  return (
    <div className="body">
      <h1>Todo List</h1>
      <div className="todo-container">
        <h2>Total Loaded Todos: {todos.length} / {total}</h2>  
        <div className="add-todo" style={{display: 'flex', gap: '10px'}}>
            <input type="text" placeholder="Add a new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
        
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <span>{todo.todo}</span>
              <button 
                onClick={() => toggleComplete(todo.id)}
                className={`complete-btn ${todo.completed ? 'undo' : ''}`}
              >
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button 
                onClick={() => deleteTodo(todo.id)}
                className={`delete-btn`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        
          <button 
            onClick={handleLoadMore} 
            className="load-more-btn"
            disabled={todos.length >= 100}
          >
            Load More
          </button>
        
      </div>
    </div>
  );
};

export default ToDo;