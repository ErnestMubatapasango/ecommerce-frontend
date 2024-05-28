"use client"
import { ArrowLeftCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {
    const router = useRouter()
  return (
    <div onClick={() => router.push("/store")} className='mb-5'>
        <ArrowLeftCircle size={40} strokeWidth={1} className='text-slate-500'/>
    </div>
  )
}

export default BackButton