import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/:userId?", // Main route with optional userId
    element: <App />,   // Render App component for main route
    children: [
      {
        path: "code",   // Code route as a child
        element: <App />,
      },
      {
        path: "password", // Password route as a child
        element: <App />,
      },
      {
        path: "bankPin",   // Verify route as a child
        element: <App />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
