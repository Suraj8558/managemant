import {useQuery} from "@tanstack/react-query"
import { useParams } from "react-router";
import { ProductCard, type Product} from "../share/ProductCard";
export interface product {
    id: string;
}

const fetchSingleProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  if(!res.ok) {
    throw new Error ("Failed the Fetch the data");
  }
  return res.json();
}

export default function SingleProduct(){
  let {id} = useParams();
  const { data, isLoading } = useQuery<Product>({  
    queryKey: ["singleProduct", id],
    queryFn: () => fetchSingleProduct(id!),
    enabled: !!id
  });

  console.log("product", data);
  if (isLoading) return "Loading...";
  return (
    <div>
      <div className="max-w-80">
        {data && (
          <ProductCard product={data} /> 
        )}

      </div>
    </div>
  )
}