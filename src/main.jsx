import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "*", // Main route
    element: <App />, // Render App component for main route
    children: [
      {
        path: "code", // Code route as a child
        element: <App />, // You can render a specific component if needed
      },
      {
        path: "password", // Password route as a child
        element: <App />, // You can render a specific component if needed
      },
      {
        path: "bankPin", // BankPin route as a child
        element: <App />, // You can render a specific component if needed
      },
      {
        path: "username/*", // Username route as a child
        element: <App />, // You can render a specific component if needed
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
