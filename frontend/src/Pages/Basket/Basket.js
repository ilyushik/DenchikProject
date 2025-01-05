import React, {useState, useEffect} from 'react'
import './style.css'
import BasketItem from "../../Components/BasketItem/BasketItem"
import Button from '../../Components/Button/Button'
import { useNavigate } from 'react-router-dom'

export default function Basket() {
  const [cart, setCart] = useState()

  useEffect(() => {
    const cart = localStorage.getItem("cart")
    setCart(JSON.parse(cart))
  }, [])

  const navigate = useNavigate()

  return (
    <div className="basket">
      {
        cart instanceof Array ?
          cart.map((item, index) => 
            <BasketItem
              key={`cartItem${index}`}
              image={item.product.image}
              name={item.product.name}
              price={item.product.price}
              amount={item.amount}
              size={item.size}
              cart={cart}
              setCart={setCart}
              id={item.productId}
              index={index}
            />
          )
          :null
      }
      <Button onClick={() => navigate('/order')}>Create order</Button>
    </div>
  )
}