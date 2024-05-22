import { useState } from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Authentication from './Auth/Authentication'
import Signup from './Auth/Signup'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    {/* <Router>
      <Routes>
        <Route path='/login' element={<Authentication/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
    </Router> */}
    <RouterProvider router={router}></RouterProvider>


    </>
  )
}

export default App
