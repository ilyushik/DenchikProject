import React, {useState, useEffect} from 'react'
import "./style.css"
import RangeInput from '../RangeInput/RangeInput'
import Button from '../Button/Button'

export default function BasketItem({image, name, price, amount, size, cart, setCart, id, index}) {

  const [prAmount, setPrAmount] = useState()

  const setNumber = (value, setValue) => {
    if(!isNaN(value))
      setValue(value)
  }

  useEffect(() => {
    setPrAmount(amount)
  }, [name, size])

  const totalPrice = price * prAmount

  const deleteItem = () => {
    let newCart = [...cart]

    newCart = newCart.filter(el => el.productId !== id || el.size !== size)

    localStorage.setItem('cart', JSON.stringify(newCart))

    setCart(newCart)
  }

  useEffect(() => {
    let newCart = [...cart]
    newCart[index].amount = prAmount === "" ? 0 : prAmount
    localStorage.setItem('cart', JSON.stringify(newCart))
    setCart(newCart)
  }, [prAmount])

  return (
    <div className="basker-item">
      <div className="basket-item__image-block">
        <img src={image} className="basket-item__image" alt="product"/>
      </div>
      <p className="basket-item__name default-text">{name}</p>
      <p className="basket-item__size default-text">{size}</p>
      <p className="basket-item__price default-text">{totalPrice}₴</p>
      <div className="basket-item__amount">
        <RangeInput
          name="Amount"
          value={prAmount}
          onChange={e => setNumber(e.target.value, setPrAmount)}
        >
          Amount
        </RangeInput>
      </div>
      <Button onClick={() => deleteItem()}>Delete</Button>
    </div>
  )
}
