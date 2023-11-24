import React from "react";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail.tsx';

import './App.css'

function App() {
  const rooter = createBrowserRouter([
    {
      path:"/",
      element: <Home />,
    },
    {
      path:"/movie/:movId",
      element: <MovieDetail />,
    }
  ]);
  return (
    <RouterProvider router={rooter}/>
  );
};
export default App
