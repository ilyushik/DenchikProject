import React, {useState, useEffect} from 'react'
import "./style.css"
import api from '../../Services/axios'
import RangeInput from '../../Components/RangeInput/RangeInput'
import Button from '../../Components/Button/Button'
import Select from 'react-select'
import useSelectTheme from '../../Hooks/useSecteTheme'
import { useNavigate } from 'react-router-dom'

const typeOptions = [
  { value: 'Post', label: 'Post' },
  { value: 'Courier', label: 'Courier' },
]

export default function Order() {
  const navigate = useNavigate()

  const styles = useSelectTheme(false, '300px')

  const [type, setType] = useState({ value: 'Post', label: 'Post' })

  const [loading, setLoading] = useState(false)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const [city, setCity] = useState("")
  const [postOffice, setPostOffice] = useState("")
  const [adress, setAdress] = useState("")

  const [cart, setCart] = useState()

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
      cart = cart.filter(el => el.amount > 0)
    }
    setCart(cart)
  }, [])

  const checkout = async () => {
    try {
      setLoading(true)

      const url = "/Order"

      let data = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        cart: cart.map(item => { 
          return {
            productId: item.productId,
            amount: item.amount,
            size: item.size
          }
        }),
      }

      if(type.value === 'Post')
        data.postDelivery = {
          city: city,
          postOffice: postOffice
        }
      else {
        data.courierDelivery = {
          city: city,
          adress: adress
        }
      }

      await api.post(url, JSON.stringify(data))

      setLoading(false)

      navigate('/')
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="order">
      <div className="order__info">
        <p className="order__info-header">Contact info</p>
        <RangeInput
          name="First name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        >
          First name
        </RangeInput>
        <RangeInput
          name="Last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        >
          Last name
        </RangeInput>
        <RangeInput
          name="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        >
          Phone
        </RangeInput>
        <RangeInput
          name="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        >
          Email
        </RangeInput>
        <p className="order__info-header mt-3 mb-2">Delivery info</p>
        <Select 
          value = {type}
          onChange={e => setType(e)}
          styles={styles}
          options={typeOptions}
          isOptionDisabled={option => option.disabled}
          isSearchable={false}
        />
        <RangeInput
          name="City"
          value={city}
          onChange={e => setCity(e.target.value)}
        >
          City
        </RangeInput>
        {
          type.value === 'Post' ?
            <RangeInput
              name="Post office"
              value={postOffice}
              onChange={e => setPostOffice(e.target.value)}
            >
              Post office
            </RangeInput>
            :
            <RangeInput
              name="Adress"
              value={adress}
              onChange={e => setAdress(e.target.value)}
            >
              Adress
            </RangeInput>
        }
        <Button loading={loading} onClick={() => checkout()}>Checkout</Button>
      </div>
      <div className="order__cart">
        {
          cart instanceof Array ?
            cart.map((item, index) => 
              <div className="basker-item" key={`orerItem${index}`}>
                <div className="basket-item__image-block">
                  <img src={item.product.image} className="basket-item__image" alt="product"/>
                </div>
                <p className="basket-item__name default-text">{item.product.name}</p>
                <p className="basket-item__size default-text">{item.size}</p>
                <p className="basket-item__size default-text">{item.amount} шт</p>
                <p className="basket-item__price default-text">{item.product.price * item.amount}₴</p>
              </div>
            )
            : null
        }
      </div>
    </div>
  )
}