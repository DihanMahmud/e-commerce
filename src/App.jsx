import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'


function App() {

  return (
    <>
    <Navbar />

    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/cart' element={<CartPage></CartPage>}></Route>
    </Routes>

    </>
  )
}

export default App
