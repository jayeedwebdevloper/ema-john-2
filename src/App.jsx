import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Controller from './Controller/Controller';
import ContentItems from './Body/ContentItems';
import Home from './Body/Home';
import Error from './Body/Error';

function App() {
  const control = createBrowserRouter([
    {
      path: '/',
      element: <Controller></Controller>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/shop',
          element: <ContentItems></ContentItems>
        },
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

  return (
    <>
     <RouterProvider router={control}></RouterProvider>
    </>
  )
}

export default App
