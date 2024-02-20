import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { GetBookByID, UpdateBookByID, DeleteBookByID, AddBook } from "./routes/index.js";

const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/add",
        element: <AddBook />
    },
    {
        path: "/searches",
        element: <GetBookByID />
    },
    {
        path: "/searches/updates",
        element: <UpdateBookByID />
    },
    {
        path: "/searches/deletion",
        element: <DeleteBookByID />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={browserRouter} />
    </React.StrictMode>,
);
