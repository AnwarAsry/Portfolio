import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Projects } from './routes/Projects.tsx';
import App from './App.tsx';
import { Layout } from './routes/Layout.tsx';
import { Experiance } from './routes/Experiance.tsx';
import { About } from './routes/About.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "experience",
        element: <Experiance />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)