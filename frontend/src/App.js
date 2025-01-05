import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import ProductPage from './Pages/ProductPage/ProductPage'
import Basket from './Pages/Basket/Basket'
import Order from './Pages/Order/Order'

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-light-200 dark:bg-dark-100">
      <div className="grow flex flex-col">
        <Header />

        <main>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/product/:id' element={<ProductPage/>}/>
            <Route exact path='/cart' element={<Basket/>}/>
            <Route exact path='/order' element={<Order/>}/>
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
