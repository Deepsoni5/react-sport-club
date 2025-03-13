import { Card } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Cricket Bat",
    price: "₹250",
  },
  {
    id: 2,
    name: "Basket Ball",
    price: "₹250",
  },
  {
    id: 3,
    name: "Racket",
    price: "₹250",
  },
  {
    id: 4,
    name: "Racket",
    price: "₹250",
  },
  {
    id: 5,
    name: "Racket",
    price: "₹250",
  },
  {
    id: 6,
    name: "Racket",
    price: "₹250",
  },
];

export function TopSellingProductCard() {
  return (
    <Card className="p-4">
      <div className="text-sm font-medium">Top Selling Products</div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="h-20 w-full bg-gray-100 rounded-lg"></div>
            <div className="mt-2 text-center">
              <div className="text-xs font-medium">{product.name}</div>
              <div className="text-xs text-gray-500 mt-0.5">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
