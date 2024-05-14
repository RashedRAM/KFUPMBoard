"use client";
import MainLayout from "../layouts/MainLayout";
import useIsLoading from "../hooks/useIsLoading";
import { useEffect, useState } from "react";

export default function Reported() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    useIsLoading(true);

    const response = await fetch("/api/reported");
    const prods = await response.json();

    setProducts(prods);
    useIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Reports</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-center">ID</th>
                <th className="px-4 py-2 border-b text-center">Item</th>
                <th className="px-4 py-2 border-b text-center">Title</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(products) && products.map((report) => (
                <tr key={report.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b text-center">{report.id}</td>
                  <td className="px-4 py-2 border-b text-center">{report.product.id}</td>
                  <td className="px-4 py-2 border-b text-center">{report.product.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
