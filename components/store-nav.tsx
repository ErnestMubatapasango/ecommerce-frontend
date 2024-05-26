// "use client"
// import { cn } from '@/lib/utils'
// import { Category } from '@/types'
// import Link from 'next/link'
// import { usePathname, useSearchParams } from 'next/navigation'
// import React from 'react'

// interface StoreNavProps {
//     data: Category[]
// }
// const StoreNav:React.FC<StoreNavProps> = ({data}) => {

//     const pathname = useSearchParams()
//     const routes = data.map(route => ({
//        // href: `/store/category/${route.id}`,
//         label: route.name,
//         active: pathname == `/store?category=${route.id}`
//     }))

//   return (
//     <div className='flex gap-5 '>
//         {
//             routes.map(route => {
//                 return (
//                     <button key={route.label} className={cn('text-2xl  font-semibold  p-2 rounded-2xl transition-colors hover:text-[#131B28]', 
//                         route.active ? 'text-neutral-400 bg-black': 'text-slate-700 bg-gray-200 ' )}>
//                         {route.label}
//                     </button>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default StoreNav
"use client"
import Button from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Category} from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import queryString from 'query-string'
import React from 'react'

export const revalidate = 0;

interface FilterProps {
    data: (Category) [],

    valueKey: string
}

const StoreNav:React.FC<FilterProps> = ({data, valueKey}) => {
  
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
  return (
    <div className='mb-8'> 
      <hr className='my-4'/>
      <div className='flex flex-wrap gap-2'>
        {data.map((filter) => {
          return (
            <div key={filter.id} className='flex items-center'>
              <Button 
                className={cn("text-2xl  font-semibold  p-2 rounded-2xl transition-colors", selectedValue === filter.id ? "text-neutral-100 bg-[#131b28]": "text-slate-700 bg-gray-200")}
                onClick={() => onClick(filter.id)}
              >
                {filter.name}
              </Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StoreNav