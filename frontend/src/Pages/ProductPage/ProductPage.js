import React, { useEffect, useState } from 'react'
import "./style.css"
import api from '../../Services/axios'
import { useParams } from 'react-router-dom'
import useSelectTheme from '../../Hooks/useSecteTheme'
import Select from 'react-select'
import Button from '../../Components/Button/Button'
import { AiFillStar} from 'react-icons/ai'
import Mark from '../../Components/Mark/Mark'
import CreateComment from '../../Components/CreateComment/CreateComment'

const sizeOptions = [
  { value: 'XS', label: 'XS' },
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
  { value: 'XXL', label: 'XXL' },
]

export default function ProductPage() {

  const params = useParams()

  const [product, setProduct] = useState({})

  const [mark, setMark] = useState({})

  const [size, setSize] = useState()

  const [visibility, setVisibility] = useState(false)
  
  const styles = useSelectTheme(true, '120px')

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {

    const res = await api.get(`/products/${params.id}`)

    let product = res.data

    // const markRes = await api.post(markUrl, JSON.stringify({
    //   productId: parseFloat(params.id)
    // }))
    //
    // product = {
    //   ...product,
    //   mark: markRes.data !== null ? parseFloat(markRes.data.value) : 0,
    //   amount: markRes.data !== null ? parseFloat(markRes.data.amount) : 0
    // }
    const markRes = await api.get(`/products/searchMark/${params.id}`)
    setMark(markRes.data)
    setProduct(product)
  }

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    console.log(cart)

    if(!cart.find(el => el.productId === params.id && el.size === size.value)) {
      cart.push({
        productId: params.id,
        size: size.value,
        amount: 1,
        product: product
      })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return (
    <div className="product">
      <div className="product__info">
        <div className="product__image-block">
          <img src={product.image} className="product__image" alt={"product"}></img>
        </div>
        <div className="product__content">
          <div className="product__header">
            <p className="product__header-text">{product.name}</p>
            <div className="product__rating-button" onClick={() => setVisibility(true)}>
              <AiFillStar className="icon" size={"25px"}/>
              <p className="product__rating-text">{parseFloat(mark.value).toFixed(2)}</p>
            </div>
          </div>
          <p className="product__price default-text">{product.price}₴</p>
          <div className="product__info-block">
            <p className="product__info-text default-text">{product.brand}</p>
            <p className="product__info-text default-text">{product.category}</p>
            <p className="product__info-text default-text">{product.color}</p>
          </div>
          <p className="product__price default-text">{product.description}</p>
          <div className="product__basket-block">
            <Select 
              value = {size}
              onChange={e => setSize(e)}
              styles={styles}
              options={sizeOptions}
              isOptionDisabled={option => option.disabled}
              isSearchable={false}
            />
            <Button outline={true} onClick={() => addToCart()}>Add to cart</Button>
          </div>
          <CreateComment
            label={"Comment"}
            id={params.id}
          />
        </div>
      </div>

      <Mark visibility={visibility} setVisibility={setVisibility} id={params.id} getProduct={getProduct}/>
    </div>
  )
}