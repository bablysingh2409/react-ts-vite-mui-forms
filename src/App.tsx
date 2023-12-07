
import './App.css'
import FirstPage from './components/FirstPage/FirstPage'
import SecondPage from './components/SecondPage/SecondPage'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
function App() {
   const router=createBrowserRouter([
    {
      path:'/',
      element:<FirstPage/>
    },
    {
     path:'/secondpage',
     element:<SecondPage/>
    }
   ])

  return (
    <>
 <RouterProvider router={router}/>
    </>
  )
}

export default App
