import React,{useState} from 'react'
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import ProductListing from '../../components/ProductListing/ProductListing'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  
  const[category, setCategory] = useState('all')

  return (
    <div>
        <Header/>
        <Categories category ={category} setCategory={setCategory}/>
        <ProductListing category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home