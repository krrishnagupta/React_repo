import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Createpost from './components/Createpost.jsx'
import Postlist from './components/Postlist.jsx'
import {creatPostaction} from './components/Createpost.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { path: "/", element: <Postlist /> },
      { path: "/create-post", element: <Createpost />, action: creatPostaction}
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
