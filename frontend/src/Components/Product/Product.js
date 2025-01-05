import React from 'react'
import './style.css'

export const Product = ({id, image,name,price}) => {
  return (
    <a href={`/product/${id}`} className="product-link">
      <div className="product-link__product-content">
        <div className="product-link__product-image-block">
          <img src={image} className="product-link__product-image" alt={"product"}/>
        </div>
        <div className="product-link__product-info-block">
          <div className="product-link__product-name-block">
            <p className="default-text">{name}</p>
          </div>
          <div className="product-link__product-price-block">
            <p className="default-text">{price}₴</p>
          </div>
        </div>
      </div>
    </a>
  )
}
