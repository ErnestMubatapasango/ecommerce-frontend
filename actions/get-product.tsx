import { Product } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_URL_API}/products`;

const getProduct = async (id:string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;