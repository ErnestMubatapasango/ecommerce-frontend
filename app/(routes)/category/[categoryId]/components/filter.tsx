"use client"
import Button from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Category, Color, Size } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import queryString from 'query-string'
import React from 'react'

interface FilterProps {
    data: (Category | Size | Color) [],
    name: string
    valueKey: string
}

const Filter:React.FC<FilterProps> = ({data, name, valueKey}) => {
  
  const searchParams = useSearchParams()
  const router = useRouter()

  const selectedValue = searchParams.get(valueKey)

  const onClick = (id: string) => {
    const current = queryString.parse(searchParams.toString())

    const query = {
      ...current, [valueKey]: id
    }

    if(current[valueKey] === id){
      query[valueKey] = null
    }
    
    const url = queryString.stringifyUrl({
      url: window.location.href,
      query
    }, {skipNull: true})

    router.push(url )
  }
  const removeFilters = () => {
    const current = new URL(window.location.href)
    current.searchParams.delete(valueKey)  
    const url = current.toString()
    router.push(url)
  }
  return (
    <div className='mb-8'> 
      <h3 className='text-lg font-semibold'>
        {name}
      </h3>
      <hr className='my-4'/>
      <div className='flex flex-wrap gap-2'>
        {data.map((filter) => {
          return (
            <div key={filter.id} className='flex items-center'>
              <Button 
                className={cn("rounded-md text-sm bg-white p-2 border border-gray-300 text-black", selectedValue === filter.id && "bg-black text-white")}
                onClick={() => onClick(filter.id)}
              >
                {filter.name}
              </Button>
            </div>
          )
        })}
      </div>
      {selectedValue && <Button className='mt-5 rounded-md text-sm bg-black p-2 border border-gray-300 text-white' onClick={removeFilters}>Clear Filter</Button>}
    </div>
  )
}

export default Filter