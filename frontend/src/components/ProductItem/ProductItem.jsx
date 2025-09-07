import React,{useEffect,useState,useContext} from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ProductItem = ({id,name,price,description,image}) => {
    
    const {addToCart,removeFromCart,cartItems,url} = useContext(StoreContext)

  return (
    <div className='w-full h-full flex flex-col m-auto border rounded-[15px] shadow-black'>
        <div className='relative flex-shrink-0'>
            <img className='w-full h-64 object-cover rounded-tl-custom-tl rounded-tr-custom-tr rounded-bl-custom-bl rounded-br-custom-br' src={image} alt="" />
             {
                !cartItems[id]?<img className='w-[40px] absolute bottom-2 right-2 rounded-[50%] cursor-pointer' onClick={()=>addToCart(id)} src = {assets.add_icon_white} alt=""/>
                :<div className='absolute bottom-2 right-2 flex items-center gap-2.5 p-1.5 rounded-[50px] bg-white'>
                    <img className='w-[30px]' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img className='w-[30px]'onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div> 
             }
        </div>
        <div className='p-5 flex flex-col flex-grow'>
            <div className='flex justify-between items-start mb-2.5'>
                <p className='text-md font-semibold flex-grow mr-2' style={{ 
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: '1.2em',
                    maxHeight: '2.4em'
                }}>{name}</p>
                <img className='w-[70px] flex-shrink-0' src={assets.rating_starts} alt="" />
            </div>
            <p className='text-[#676767] text-lg flex-grow' style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: '1.4em',
                maxHeight: '4.2em'
            }}>{description}</p>
            <p className='text-orange-500 font-semibold my-2.5 mt-auto'>${price}</p>
        </div>
    </div>
  )
}

export default ProductItem
