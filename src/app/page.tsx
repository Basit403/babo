import Slider from "@/components/Slider"
import ProductList from "@/components/ProductList"
import CategoryList from "@/components/CategoryList"
import { usewixClient } from "@/hooks/useWixClient"
import { useEffect, Suspense } from "react"
import { wixClientServer } from "@/lib/wixClientServer"


const HomePage = async () => {

  // const wixClient = usewixClient()

  // useEffect(() => {
  //  const getProducts = async () => {
  //    const res = await wixClient.products.queryProducts().find();

  //    console.log(res)
  //  };

  //  getProducts();
  //  }, [wixClient]);

  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);
  

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} 
          limit={4} />
        </Suspense> 
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList  categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} 
        limit={4} />
      </div>
    </div>
  )
}

export default HomePage