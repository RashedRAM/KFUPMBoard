"use client"
import MainLayout from "../layouts/MainLayout";
import OfferedItem from "../components/OfferedItem";

export default function Offered() {

    const product = {
          id: 2,
          title: "English Books",
          description: "Oria Books.     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta nec dolor at rhoncus. Praesent tincidunt finibus orci in porttitor ",
          building: 837,
          url:"https://picsum.photos/id/4"
        }

    return (
        <>
        <MainLayout>
            <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                <div className="text-2xl font-bold my-4">My Offerd Items</div>
                <div className="relative flex items-baseline justify-between gap-2">
                    <div className="w-[75%]">
                        <OfferedItem key={product.id} product = {product} />
                    
                    </div>
                </div>

            </div>
        </MainLayout>
        </>
    )
}