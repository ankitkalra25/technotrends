import {React, useEffect, useContext} from 'react'
import './Home.scss'
import Banner from './Banner/Banner'
import Category from '../Home/Category/Category'
import { fetchDataFromApi } from '../../utils/api'
import Products from '../Products/Products'
import { Context } from '../../utils/Context';
const Home = () => {
const {categories, setCategories, products, setProducts} = useContext(Context);
  useEffect(() => {
    getCategories();
    getProducts()
  },[])

  const getCategories = () => {
    fetchDataFromApi("/api/Categories?populate=*").then((res) =>{
      console.log(res)
      setCategories(res)
    })
  }

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) =>{
      console.log(res)
      setProducts(res)
    })
  }
  return (
    <div>
        <Banner/>
        <div className="main-content">
          <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products"/>
          </div>
        </div>
        
    </div>
  )
}

export default Home