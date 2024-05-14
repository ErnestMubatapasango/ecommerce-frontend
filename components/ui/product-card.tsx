"use client"
import { Product } from '@/types'
import { Expand, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import React, { MouseEventHandler } from 'react'
import IconButton from './icon-button'
import Currency from './currency'
import { useRouter } from 'next/navigation'
import PreviewModal from '../preview-modal'
import usePreviewModal from '@/hooks/use-preview-modal'
import useCart from '@/hooks/use-cart'

interface ProductCard {
    data: Product
}
const ProductCard: React.FC<ProductCard> = ({data}) => {

    const router = useRouter();
    const handleClick = () => {
        return router.push(`/product/${data?.id}`)
    }

    const previewModal = usePreviewModal()
    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        previewModal.onOpen(data)
    }

    const cart = useCart()
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        cart.addItem({...data, quantity: 1})
    }
  return (
    <div onClick={handleClick} className='bg-white rounded-xl cursor-pointer group border p-3 space-y-4'>
        {/**images and actions */}
        <div className='aspect-square relative bg-gray-100 rounded-xl'>
            <Image 
                src={data?.images?.[0]?.url}
                alt='product image'
                fill
                className='aspect-square object-cover rounded-md'
            />
            <div className='absolute opacity-0 group-hover:opacity-100 transition w-full px-6 bottom-5'>
                <div className='flex gap-x-6 justify-center'>
                    <IconButton 
                        icon={<Expand size={20}  className='text-gray-600'/>}    
                        onClick={onPreview}
                    />
                    <IconButton 
                        icon={<ShoppingCartIcon size={20}  className='text-gray-600'/>}    
                        onClick={onAddToCart}
                    />
                </div>
                
            </div>
        </div>
        {/**Descritpion */}
        <div>
            <p className='font-semibold text-lg truncate'>{data.name}</p>
            <p className='font-normal text-sm'>{data.category.name}</p>    
        </div>
        {/**Price */}
        <div className='flex items-center justify-between'>
            <Currency value={data.price} />
        </div>
    </div>
  )
}

export default ProductCard