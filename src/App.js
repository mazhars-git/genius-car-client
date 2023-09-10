import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes/Routes';

function App() {

  return (
    <div className='max-w-screen-lg mx-auto'>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
