import { userState } from 'react';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/error-page';
import './App.css'

function App() {
  const rooter = createBrowserRouter([
    {
      path:"/",
      element: <Home />,
      errorElement:<ErrorPage />,
      // path;"/movie/:id", //rescatar el id del componente
    },
  ]);
  return (
    <RouterProvider router={rooter}/>
  );
};
export default App
