"use client"

import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'


const Summary = () => {

    const items = useCart(state => state.items)
    const removeAll = useCart(state => state.removeAll)

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0)

    const searchParams = useSearchParams()

    React.useEffect(() => {
        if(searchParams.get("success")){
            toast.success("Payment successful")
            removeAll()
        }

        if(searchParams.get("cancelled")){
            toast.error("Something went wrong")
        }
    }, [searchParams, removeAll])

    const onCheckout = async() => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/checkout`, {
            productIds: items.map((item) => item.id)
        })
        window.location = response.data.url
    }

  return (
    <div className='rounded-lg lg:col-span-5 bg-gray-50 mt-16 lg:mt-0 px-4 py-6'>
        <h2 className='font-semibold text-lg text-gray-900 pb-5'>Order Summary</h2>
        <div className='flex justify-between border-t pt-4'>
            <div className='text-base font-medium text-gray-900'>
                Order Total
            </div>
            <Currency value={totalPrice} />
        </div>
        <Button disabled={items.length === 0} onClick={onCheckout} className='mt-4 w-full'>Checkout</Button>
    </div>
  )
}

export default Summary