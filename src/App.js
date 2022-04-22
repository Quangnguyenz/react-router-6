import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import SingleProduct from './pages/SingleProduct'
import SharedProducLayout from './pages/SharedProductLayout'
function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />} />
          <Route path='products' element={<SharedProducLayout />} />
          <Route path='products' element={<Products />} />
          <Route path=':productId' element={<SingleProduct />}></Route>
          <Route path='login' element={<Login setUser={setUSer}></Login>}></Route>
          <Route path='dashboard' element={<ProtectedRoute user={user}></ProtectedRoute>}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter >

  )
}

export default App;
