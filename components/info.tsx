""
import { Product } from '@/types'
import React from 'react'
import Currency from './ui/currency'
import { ShoppingCart } from 'lucide-react'

interface infoProps {
    data: Product
}
const Info: React.FC<infoProps> = ({data}) => {
    console.log("info", data)
  return (
    <div className='flex flex-col items-start gap-y-4'>
        <h1 className='font-bold text-3xl text-gray-600'>{data?.name}</h1>
        <p className='font-semibold text-2xl'>
            <Currency value={data?.price}/>
        </p>
        <hr className='my-2 w-full' />
   
        <div className='flex items-center gap-x-4'>
            <h3 className='font-semibold text-black'>Size: </h3>
            <div >{data?.size?.name}</div>
        </div>
        <div className='flex items-center gap-x-4'>
            <h3 className='font-semibold text-black'>Color: </h3>
            <div className='w-6 h-6 rounded-full border border-gray-600'  style={{backgroundColor: data?.color?.name}}/>
        </div>
        <button className='bg-black text-white p-3 rounded-full flex items-center justify-between gap-x-2 mt-10'>
            Add to Cart
            <ShoppingCart className='h-5 w-5' />
        </button>
    </div>
  )
}

export default Info