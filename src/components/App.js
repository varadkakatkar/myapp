import { RouterProvider } from 'react-router-dom';
import appRouter from '../router';
import './App.css';

function App() {
  return (
    <div className="App">
     <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
