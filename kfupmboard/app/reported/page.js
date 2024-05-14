"use client"
import MainLayout from "../layouts/MainLayout";
import Product from '../components/Product';
import useIsLoading from "../hooks/useIsLoading";
import { useEffect, useState } from "react";


export default function MyOfferedItemsPage() {
    const [products, setProduct] = useState([]);
  
    const getProducts = async () => {
      useIsLoading(true);
  
      const response = await fetch("/api/reported");
      const prods = await response.json();
  
      setProduct(prods);
      useIsLoading(false);
    };
  
    useEffect(() => {
      getProducts();
    }, []);
  
    return (
      <MainLayout>
        <div className="max-w[1200px] mx-auto">
          <div className="text-2xl font-bold mt-4 mb-6 px-4">Items</div>
  
          <div className="grid grid-cols-5 gap-4">
            {Array.isArray(products) && products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </MainLayout>
    );
  }