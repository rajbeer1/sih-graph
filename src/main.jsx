import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import ResultPage from './ResultPage.jsx';
import DataPage from './DataPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ResultPage />,
  },
  {
    path: "/data",
    element: <DataPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
