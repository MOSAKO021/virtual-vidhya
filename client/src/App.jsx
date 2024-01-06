import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeLayout, 
  Landing, 
  Register, 
  Login, 
  DashboardLayout, 
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
 } from './pages'
import Tasks from './pages/Tasks'
import Content from './pages/Content'


export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme
}

checkDefaultTheme()

const router = createBrowserRouter([
  {
    path: '/',
    element:<HomeLayout />,
    errorElement:<Error />,
    children: [
    {
      index: true,
      element: <Landing />
    },
    {
      path: 'register',
      element:<Register />,
    },
    {
      path: 'login',
      element:<Login />,
    },
    {
      path: 'dashboard',
      element:<DashboardLayout />,
      children: [
        {
          index:true,
          element: <AddJob />
        },
        {
          path:'content',
          element: <Content />
        },
        {
          path:'tasks',
          element: <Tasks />
        },
        {
          path:'profile',
          element: <Profile />
        },
        {
          path:'admin',
          element: <Admin />
        }
      ]
    },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App