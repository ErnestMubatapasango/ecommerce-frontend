import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Home from "@/components/Home";
import React from 'react';

export const revalidate = 0;

interface BillboardIdProp {
  params: {
    billboardId: string
  }
}

const HomePage: React.FC<BillboardIdProp> = async () => {
  
  // const products = await getProducts({ isFeatured: true });
  // const billboard = await getBillboard("6613c586c51364c531a1fa9a");

  return (

      <div className="space-y-10 pl-9 pr-5 md:px-12 pt-20 mt-10 mb-96">
        <Home />  
        {/* <Billboard 
          data={billboard}
        />
         <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div> */}
      </div>

  )
};

export default HomePage;