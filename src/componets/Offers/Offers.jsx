import React from 'react'
import Button from '../../shared/button/Button'
import exclusive_image from '../../assets/images/exclusive_image.png'

const Offers = () => {
  return (
    <div className='w-[65%] h-[60vh] flex m-[auto] p-[0px 140px] mb-[150px] bg-gradient-to-r from-cyan-200 to-blue-100 pl-9'>
        <div className="flex flex-col flex-1 justify-center">
        <h1 className='text-[#171717] text-[70px] font-semibold'>Exclusive</h1>
        <h1 className='text-[#171717] text-[70px] font-semibold'>Offers For You</h1>
        <p className='text-[20px] font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
        <Button text="Check Now"/>
        </div>
        <div className="flex">
            <img src={exclusive_image} className='w-[250px]' alt="" />
        </div>
    </div>
  )
}

export default Offers