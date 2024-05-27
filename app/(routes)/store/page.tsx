
import React from 'react'
import getCategories from '@/actions/get-categories'
import StoreNav from '@/components/store-nav'
import getSizes from '@/actions/get-sizes'
import getColors from '@/actions/get-colors'
import getProducts from '@/actions/get-products'
import Container from '@/components/ui/container'
import NoResults from '@/components/ui/no-results'
import ProductCard from '@/components/ui/product-card'
import Filter from '../category/[categoryId]/components/filter'
import MobileFilters from '../category/[categoryId]/components/mobile-filters'


interface categoriesPageProps {
  searchParams: {
    colorId: string
    sizeId: string
    categoryId: string
  }
}
const StorePage:React.FC<categoriesPageProps> = async({searchParams}) => {

    const  categories = await getCategories()
    const sizes = await getSizes()
    const colors = await getColors()
    const products = await getProducts({
      categoryId: searchParams.categoryId,
      colorId: searchParams.colorId,
      sizeId: searchParams.sizeId,
    })
  return (
    <div className="mx-2 md:mx-8 pt-20 mt-20 space-y-10">
      <div className="flex items-center justify-start gap-5">
        <h2 className='text-4xl font-extrabold'>Store |</h2>
        <StoreNav 
          data={categories}
          valueKey="categoryId"
        />  
      </div>
      {/* / */}
      <div>
        <Container>
          {/* <Billboard data={category.billboard} />  */}
          <div className='px-4 sm:px-6 lg:px-8'>
              <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
                  {/**Mobile filters */}
                  <MobileFilters sizes={sizes} colors={colors} />
                      <div className='hidden lg:block'>
                          
                          <Filter 
                              data={sizes}
                              name="Sizes"
                              valueKey="sizeId"
                          />
                          <Filter 
                              data={colors}
                              name="Colors"
                              valueKey="colorId"
                          />
                          
                      </div>
              
                  <div className='mt-6 lg:col-span-4'>
                      {products.length === 0 && <NoResults />}
                      <div className='grid grid-cols-1 sm;grid-cols-2 md:grid-cols-3 gap-4'>
                          {products.map((item) => (
                              <ProductCard  key={item.id} data={item}/>
                          ))}
                      </div>
                  </div>
              </div>
          </div>                
        </Container>
      </div>
    </div>
    
  )
}

export default StorePage