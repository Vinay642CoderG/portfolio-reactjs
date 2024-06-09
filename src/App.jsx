import { Suspense, lazy } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// lazy loading here 
const Index = lazy(()=>import("./pages/Index"));

function App() {

  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='*' element={<h1 className=' text-white text-2xl text-center mt-[5rem]'>404 Page Not found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
