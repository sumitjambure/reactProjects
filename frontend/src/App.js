import './App.css';
import Login from './Login';
import Signup from './Signup';
import LoginValidation from './LoginValidation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App;
