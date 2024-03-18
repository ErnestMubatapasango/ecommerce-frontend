"use client"
import React from 'react'
import Button from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import useCart from '@/hooks/use-cart'

const NavbarActions = () => {

    const [isMounted, setIsMounted] = React.useState(false)

    
    React.useEffect(()=> {
        setIsMounted(true)
        
    }, [])

    const cart = useCart()
    if(!isMounted) {
        return null;
    }
    
  return (
    <div className='ml-auto flex items-center'>
        <Button className='flex items-center rounded-full bg-black px-4'>
            <ShoppingBag size={20} color='white'/>
            <span className='ml-2 font-medium text-sm'>
                {cart.items.length}
            </span>
        </Button>
        
    </div>
  )
}

export default NavbarActions