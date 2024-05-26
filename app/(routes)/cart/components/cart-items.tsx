import Currency from '@/components/ui/currency'
import IconButton from '@/components/ui/icon-button'
import useCart from '@/hooks/use-cart'
import { Product } from '@/types'
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface cartItemsProps {
    data: Product
}
const CartItem: React.FC<cartItemsProps> = ({data}) => {

    const cart = useCart()
    const [quantity, setQuantity] = React.useState(data.quantity ?? 1)
    const onRemove = () => {
        cart.removeItem(data.id)
        console.log("button clicked")
    }
    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity)
        cart.updatedQuantity(data.id, newQuantity)
    }
  return (
    <li className='flex py-6 border-b'>
        <div className='relative h-24 w-24 overflow-hidden sm:h-48 sm:w-48 rounded-md'>
            <Image 
                src={data.images[0].url} 
                fill 
                alt="product image"
                className='object-center object-cover'
            />
        </div>
        <div className='flex flex-col flex-1 relative justify-between ml-4 sm:ml-6'>
            <div className='z-10 right-0 top-0 absolute'>
                <IconButton icon={<X size={15} />} onClick={onRemove}/>
            </div>
            <div className='relative sm:grid sm:grid-cols-2 sm:gap-x-6 pr-9 sm:pr-0'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-lg text-black'>{data.name}</p>
                </div>

                <div className='mt-1 flex text-sm'>
                    <p className='text-gray-500 '>{data.color.name}</p>
                    <p className='text-gray-500 pl-4 border-l border-gray-200 ml-4 '>{data.size.name}</p>
                </div>

                <Currency value={data.price} />
                <div className='flex gap-3'>
                    <button
                        className='bg-gray-200 p-1 font-bold text-lg cursor-pointer rounded-full h-8 w-8 shadow-md'
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity === 1}
                    >
                        -
                    </button>

                    <input className='font-bold w-5 text-center text-xl' type='number' value={quantity}  onChange={(e) => handleQuantityChange(parseInt(e.target.value))}/>

                    <button
                            className='bg-gray-200 p-1 font-bold text-lg cursor-pointer rounded-full h-8 w-8 shadow-md'
                            onClick={() => handleQuantityChange(quantity + 1)}
                        >
                            +
                        </button>
                </div>
            </div>

            
        </div>
    </li>
  )
}

export default CartItem