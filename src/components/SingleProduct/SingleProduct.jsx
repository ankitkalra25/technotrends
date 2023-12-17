import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import RelatedProduct from './RelatedProducts/RelatedProduct'
import prod from '../../assets/banner-img.png'
import './SingleProduct.scss'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaCartPlus } from 'react-icons/fa'
import useFetch from '../../hooks/useFetch'
import { Context } from '../../utils/Context'

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1)
  const {id} = useParams()
  const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
  const {handleAddToCart} = useContext(Context);

  const increment = () => {
    setQuantity(prev => prev + 1)
  }

  const decrement = () => {
    setQuantity((prev) => {
      if(prev==1) return 1
      return prev - 1
    })
  }
 
  if (!data) return;
  const product = data?.data?.[0]?.attributes
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={import.meta.env.VITE_DEV_URL + product.img?.data?.[0]?.attributes?.url} alt="" />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className='add-to-cart-button' onClick = {() => {
                console.log(data.data[0], quantity,handleAddToCart)
                 handleAddToCart(data.data[0], quantity)
                 setQuantity(1)
              }}
                 > <FaCartPlus size={20}/> ADD TO CART</button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{' '}
              <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
              <span className='social-icons'>
                <FaFacebookF size={20}/>
                <FaTwitter size={20}/>
                <FaInstagram size={20}/>
                <FaLinkedin size={20}/>
                <FaPinterest size={20}/>
              </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProduct productId={id} categoryId={product.categories.data[0].id} />
      </div>
    </div>
  )
}

export default SingleProduct