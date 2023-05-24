
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './View/Home/Home';
import Test from './View/Home/test';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/test' element={<Test/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
