"use client"
import MainLayout from "./layouts/MainLayout";
import Product from './components/Product';

export default function Home() {

  const products = [
    {
      id: 1,
      title: "Calulator",
      description: "A calculator for all your needs",
      building: 837,
      url:"https://picsum.photos/id/7"

    },
    {
      id: 2,
      title: "English Books",
      description: "Oria Books",
      building: 837,
      url:"https://picsum.photos/id/4"
    }
  ]

  return (
    <MainLayout>
      <div className="max-w[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Items</div>

        <div className="grid grid-cols-5 gap-4">
          {products.map(product => (
            <Product key={product.id} product = {product} />
          ))}

        </div>
      </div>
    </MainLayout>
  );
}
