import '../index.css'
import { useQuery } from '@tanstack/react-query'
import { ProductCard, type Product } from '@/components/share/ProductCard'

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products")
  if (!res.ok) {
    throw new Error("Failed to fetch the api")
  }
  return res.json()
}

function App() {
  const { isLoading, data } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })

  if (isLoading) return <div className="container py-8">Loading...</div>
  if (!data?.length) return <div className="container py-8">No products found.</div>

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
