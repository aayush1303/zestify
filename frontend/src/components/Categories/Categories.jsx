import React from 'react'
import { category_list } from '../../assets/assets'

const Categories = ({category,setCategory}) => {

  return (
    <div className='flex flex-col gap-[20px] m-[20px]' id='explore-products'>
        <h1 className='font-bold text-2xl'>Explore Our Products</h1>
        <p className='max-w-[60%] text-lg text-[#808080]'>Choose from a diverse collection</p>
        <div id='product-list' className="flex justify-between items-center gap-[30px]  overflow-x-scroll">
            {category_list.map((item, index) => {
               return(
                <div onClick={()=>setCategory(prev=>prev===item.category_name?"all":item.category_name)} key={index} className='explore-products-list-item flex flex-col items-center min-w-[80px]'>
                    <img  src={item.category_image} alt="" className={`w-[7.5vw] cursor-pointer min-w-[80px] transition-[0.2s] rounded-lg ${category===item.category_name?"border-orange-600 border-[4px] p-0.5 rounded-lg":""}`} />
                    <p className='mt-2.5 text-[#747474] text-lg text-center'>{item.category_name}</p>
                </div>
               )
            })}
        </div>
        <hr className='m-2.5 h-0.5 bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default Categories
