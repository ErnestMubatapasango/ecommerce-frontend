import getCategory from '@/actions/get-category'
import getColors from '@/actions/get-colors'
import getProducts from '@/actions/get-products'
import getSizes from '@/actions/get-sizes'
import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'
import React from 'react'
import Filter from './components/filter'

interface CategoryPageProps {
    params: {
        categoryId: string
    }
    searchParams: {
        colorId: string
        sizeId: string
    }
}
const CategoryPage: React.FC<CategoryPageProps> = async({params, searchParams}) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })

    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)

  return (
    <div>
        <Container>
            <Billboard data={category.billboard} /> 
            Tawanda
            <div className='px-4 sm:px-6 lg:px-8'>
                <div className='hidden lg:block'>
                    {/**Mobile filters */}
                    <Filter 
                        data={sizes}
                        name="Sizes"
                        valueKey="sizeId"
                    />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CategoryPage