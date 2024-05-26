
// import Container from '@/components/ui/container'
// import React from 'react'
// import Filter from './components/filter'
// import NoResults from '@/components/ui/no-results'
// import ProductCard from '@/components/ui/product-card'
// import MobileFilters from './components/mobile-filters'
// import { Category, Color, Product, Size } from '@/types'
// import Billboard from '@/components/ui/billboard'

// interface CategoryPageProps {
    
//     category: Category
//     sizes: Size[]
//     colors: Color[]
//     products: Product[]
// }
// const CategoryPage: React.FC<CategoryPageProps> = async({products, sizes, colors, category}) => {
    
   
//   return (
//     <div>
//         <Container>
//             {/* <Billboard data={category.billboard} />  */}
//             <div className='px-4 sm:px-6 lg:px-8'>
//                 <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
//                     {/**Mobile filters */}
//                     <MobileFilters sizes={sizes} colors={colors} />
//                         <div className='hidden lg:block'>
                            
//                             <Filter 
//                                 data={sizes}
//                                 name="Sizes"
//                                 valueKey="sizeId"
//                             />
//                             <Filter 
//                                 data={colors}
//                                 name="Colors"
//                                 valueKey="colorId"
//                             />
//                         </div>
                
//                     <div className='mt-6 lg:col-span-4'>
//                         {products.length === 0 && <NoResults />}
//                         <div className='grid grid-cols-1 sm;grid-cols-2 md:grid-cols-3 gap-4'>
//                             {products.map((item) => (
//                                 <ProductCard  key={item.id} data={item}/>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
                
//         </Container>
//     </div>
//   )
// }

// export default CategoryPage