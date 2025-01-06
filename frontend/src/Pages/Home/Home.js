import React, { useState, useEffect } from 'react'
import "./style.css"
import api from '../../Services/axios'
import useSelectTheme from '../../Hooks/useSecteTheme'
import Select from 'react-select'
import RangeInput from '../../Components/RangeInput/RangeInput'
import TextInput from '../../Components/TextInput/TextInput'
import Button from '../../Components/Button/Button'
import { Product } from '../../Components/Product/Product'

const brandOptions = [
  { value: 'Adidas', label: 'Adidas' },
  { value: 'Nike', label: 'Nike' },
  { value: 'Casio', label: 'Casio' },
]

const categoryOptions = [
  { value: 'Clothing', label: 'Clothing' },
  { value: 'Footwear', label: 'Footwear' },
  { value: 'Accessories', label: 'Accessories' },
]

const colorOptions = [
  { value: 'Black', label: 'Black' },
  { value: 'Blue', label: 'Blue' },
  { value: 'Red', label: 'Red' },
  { value: 'Green', label: 'Green' },
  { value: 'Silver', label: 'Silver' },
]

export default function Home() {

  const styles = useSelectTheme(true, '300px')

  const [brandValue, setBrandValue] = useState([])
  const [categoryValue, setCategoryValue] = useState([])
  const [colorValue, setColorValue] = useState([])

  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const [loading, setLoading] = useState(false)

  const [products, setProducts] = useState([])

  const setNumber = (value, setValue) => {
    if(!isNaN(value))
      setValue(value)
  }

  const filter = async () => {
    setLoading(true)

    const url = "/products/searchByFilter"

    const data = {}

    if(brandValue.length > 0) 
      data.brands = brandValue.map(item => item.value)
    
    if(categoryValue.length > 0) 
      data.categories = categoryValue.map(item => item.value)

    if(colorValue.length > 0) 
      data.colors = colorValue.map(item => item.value)

    if(minPrice !== "")
      data.minPrice = parseFloat(minPrice)
    else
      data.minPrice = -1

    if(maxPrice !== "")
      data.maxPrice = parseFloat(maxPrice)
    else
      data.maxPrice = -1

    const res = await api.post(url, JSON.stringify(data))
    console.log(JSON.stringify(data))

    setProducts(res.data)
    console.log(res.data)

    setLoading(false)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = async () => {
    const url = "/products"

    const res = await api.get(url)

    setProducts(res.data)
  }

  return (
    <div className="home-content">
      <div className="home-content__products">
        {
          products instanceof Array ?
            products.map(item => 
              <Product
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            )
          : null
        }
      </div>
      <div className="home-content__filters">
        <div className="filter">
          <div className="filter__filter-header">
            <p className="filter__filter-header-text">Brands</p>
          </div>
          <Select 
            value = {brandValue}
            onChange={e => setBrandValue(e)}
            styles={styles}
            options={brandOptions}
            isOptionDisabled={option => option.disabled}
            isSearchable={false}
            isMulti={true}
          /> 
        </div>
        <div className="filter">
          <div className="filter__filter-header">
            <p className="filter__filter-header-text">Categories</p>
          </div>
          <Select 
            value = {categoryValue}
            onChange={e => setCategoryValue(e)}
            styles={styles}
            options={categoryOptions}
            isOptionDisabled={option => option.disabled}
            isSearchable={false}
            isMulti={true}
          /> 
        </div>
        <div className="filter">
          <div className="filter__filter-header">
            <p className="filter__filter-header-text">Colors</p>
          </div>
          <Select 
            value = {colorValue}
            onChange={e => setColorValue(e)}
            styles={styles}
            options={colorOptions}
            isOptionDisabled={option => option.disabled}
            isSearchable={false}
            isMulti={true}
          /> 
        </div>
        <div className="filter">
          <RangeInput
            name="Min price"
            value={minPrice}
            onChange={e => setNumber(e.target.value, setMinPrice)}
          >
            Min price
          </RangeInput>
        </div>
        <div className="filter">
          <RangeInput
            name="Max price"
            value={maxPrice}
            onChange={e => setNumber(e.target.value, setMaxPrice)}
          >
            Max price
          </RangeInput>
        </div>

        <div className="mt-2">
          <Button onClick={() => filter()} loading={loading} outline={true}>Filter</Button>
        </div>
      </div>
    </div>
  )
}