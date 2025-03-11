import { ShoppingCart } from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TopSellingProductCard() {
  const products = [
    {
      id: 1,
      name: "Cricket Bat",
      image: "/placeholder.svg?height=200&width=100",
    },
    {
      id: 2,
      name: "Cricket Bat",
      image: "/placeholder.svg?height=200&width=100",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <ShoppingCart className="h-5 w-5 text-blue-500" />
          Top Selling Product
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={100}
                height={200}
                className="h-32 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
