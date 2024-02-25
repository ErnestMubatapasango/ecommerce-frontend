import { cn } from '@/lib/utils'
import React, { forwardRef } from 'react'

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = forwardRef<HTMLButtonElement, ButtonProps> (({className, disabled, children, type= "button", ...props}, ref ) => {
    return (
        <button className={cn(`w-auto rounded-full bg-black text-white font-semibold px-5 py-2 
            disabled:,cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition border-transparent`, className)} ref={ref}>
            {children}
        </button>
      )
})

Button.displayName = "Button"

export default Button