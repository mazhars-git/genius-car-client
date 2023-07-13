import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
    }
  ])

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
