"use client"

import MainLayout from "@/app/layouts/MainLayout"

export default function Product({ params }) {

    const product = 
        {
          id: 1,
          title: "Calulator",
          description: "A calculator for all your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta nec dolor at rhoncus. Praesent tincidunt finibus orci, in porttitor odio malesuada eu. Phasellus eget urna justo. Nam dui mauris, fermentum ut elit ac, fermentum venenatis nibh. Mauris nec convallis nulla. Vestibulum rhoncus varius nulla et laoreet. Nulla facilisi. Donec aliquet lorem non lectus volutpat, sed euismod metus pretium. Integer sit amet ante nibh. Phasellus sollicitudin, odio non tristique venenatis, est nunc auctor libero, et faucibus felis ante at sapien. Donec bibendum ut ligula rutrum imperdiet. Nunc consectetur mollis tortor, vel mattis felis venenatis et. Phasellus vehicula fringilla blandit ",
          building: 837,
          url:"https://picsum.photos/id/7"
    
        }
      
    return (
        <>
        <MainLayout>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex px-4 py-10">
                {product?.url 
              ? <img className="w-[40%] rounded-lg" src={product?.url+'/280'} /> 
              : <div className="w-[40%]"></div> 
            }

            <div className="px-4 w-full">
                <div className="font-bold text-xl">{product?.title}</div>
                <div className="text-sm text-gray-700 pt-2">Building: {product?.building}</div>

                <div className="border-b py-1" />

                <div className="pt-3 pb-2">
                <div className="flex items-center">
                  Type: <span className="font-bold text-[17px] ml-2">Temporary</span>
                </div>
              </div>

              <div className="border-b py-1" />
              <div className="pt-3">
                <div className="font-semibold pb-1">Description:</div>
                <div className="text-sm">{product?.description}</div>
              </div>

              <button className="bg-indigo-900 text-white rounded-md px-4 py-2 mt-4 ">Contact</button>
              <div/>
              <button className="bg-red-600 text-white rounded-md px-4 py-2 mt-4 ">Report</button>



            </div>

                </div>
                
            </div>
        </MainLayout>
        </>
    )
}