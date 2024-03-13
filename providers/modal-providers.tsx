"use client"

import PreviewModal from '@/components/preview-modal'
import React from 'react'

const ModalProvider = () => {
    const [mounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(false)
    }, [])

    if(!mounted){
        return null;
    }
    
  return (
    <>
        <PreviewModal />
    </>
  )
}

export default ModalProvider