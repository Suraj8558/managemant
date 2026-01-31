import { MoreHorizontal } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md gap-0 py-0 justify-between">
      <CardHeader className="p-0 gap-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
          />
          <span className="absolute left-2 top-2 rounded-md bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
            {product.category}
          </span>
          <div className="absolute right-2 top-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon-sm" className="h-8 w-8 rounded-full shadow-sm">
                  <MoreHorizontal className="size-4" aria-label="More options" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View details</DropdownMenuItem>
                <DropdownMenuItem>Add to wishlist</DropdownMenuItem>
                <DropdownMenuItem>Compare</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CardContent className="space-y-2 px-4 py-4 ">
          <CardTitle className="line-clamp-2 text-base">{product.title}</CardTitle>
          <CardDescription className="line-clamp-2 text-sm">
            {product.description}
          </CardDescription>
        </CardContent>
      </CardHeader>
   
      <CardFooter className="flex items-center justify-between px-4 pb-4">
        <span className="text-lg font-semibold">
          ${product.price.toFixed(2)}
        </span>
        {/* <Button size="sm">Add to cart</Button> */}
        <Link to={`/product/${product?.id}`}>Single Product</Link>;
      </CardFooter>
    </Card>
  )
}
