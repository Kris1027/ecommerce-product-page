import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './features/pages/AppLayout';
import Home from './features/pages/Home';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
