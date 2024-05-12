"use client"
import { Product } from '@/types'
import React, { MouseEventHandler } from 'react'
import Currency from './ui/currency'
import { ShoppingCart } from 'lucide-react'
import useCart from '@/hooks/use-cart'
import { cn } from '@/lib/utils'

interface infoProps {
    data: Product
}


const Info: React.FC<infoProps> = ({data}) => {
    const cart = useCart()
    const [quantity, setQuantity] = React.useState(1)
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        cart.addItem({...data, quantity: quantity})
    }

    function handleQuantity(num: number){
        setQuantity(num)
        cart.updatedQuantity(data.id, num)
    }
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
        <div className='flex items-center gap-x-4'>
            <h3 className='font-semibold text-black'>Quantity: </h3>
            <div className='flex gap-2'>
                {
                    [1,2,3,4,5].map((num, index) => {
                        return (
                            <div 
                                key={index}
                                className={cn("w-8 h-8 rounded-full flex items-center justify-center border-2 cursor-pointer", 
                                quantity === num ? "bg-gray-500 shadow-md text-white" : "bg-transparent shadow-none")}
                                onClick={() => handleQuantity(num)}
                            >{num}</div>
                        )
                    })
                }
            </div>
        </div>
        <button 
            onClick={onAddToCart}
            className='bg-black text-white p-3 rounded-full flex items-center justify-between gap-x-2 mt-10'>
            Add to Cart
            <ShoppingCart className='h-5 w-5' />
        </button>
    </div>
  )
}

export default Info