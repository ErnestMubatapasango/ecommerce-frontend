"use client"
import Button from '@/components/ui/button'
import IconButton from '@/components/ui/icon-button'
import { cn } from '@/lib/utils'
import { Dialog } from '@headlessui/react'
import { Plus, X } from 'lucide-react'
import React from 'react'
import Filter from './filter'
import { Color, Size } from '@/types'

interface MobileFilterProps {
    sizes: Size[],
    colors: Color[]
}
const MobileFilters:React.FC<MobileFilterProps> = ({sizes, colors}) => {

    const [open, setOpen] = React.useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)
  return (
    <>
       
        <Button onClick={onOpen} className="flex items-center lg:hidden gap-x-3">
            Filters
            <Plus size={20} />
        </Button>
        <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
            {/** Background*/}
            <div className='bg-black fixed bg-opacity-25 inset-0'/>
            {/**Dialog Position */}
            <div className='fixed flex z-40 inset-0'>
                <Dialog.Panel className="ml-auto relative bg-white overflow-y-auto max-w-xs h-full w-full flex flex-col shadow-xl pb-6 py-4">
                    {/**Close Button */}
                    <div className='flex items-center justify-end px-4'>
                        <IconButton icon={<X size={15} />} onClick={onClose}/>
                    </div>
                    {/** Filters  */}
                    <div className='p-4'>
                        <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                        <Filter valueKey="colorId" name="Colors" data={colors} />
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    </>
  )
}

export default MobileFilters