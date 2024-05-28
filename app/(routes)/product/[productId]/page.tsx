import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import Gallery from '@/components/Gallery'
import BackButton from '@/components/back-button'
import Info from '@/components/info'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import { ArrowLeftCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export const revalidate = 0;

interface ProductPageProps {
    params: {
        productId: string
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({params}) => {

    const product = await getProduct(params.productId);
    const suggestedProducts = await getProducts({categoryId: product?.category?.id})

    if(!product){
        return null;
    }
    
  return (
    <div className='bg-white'>
        <Container>
            <div className='px-4 sm:px-6 lg:px-8 mx-2 md:mx-8 pt-20 mt-10'>
                <BackButton />
                <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                    <Gallery images={product.images} />
                    <div className='mt-10 lg:mt-0'>
                        <Info data={product} />
                    </div>
                </div>
                <hr className='my-10' />
                <ProductList title='Related Items' items={suggestedProducts}/>
            </div>
        </Container>
    </div>
  )
}

export default ProductPage