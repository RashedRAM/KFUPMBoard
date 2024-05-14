import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";


//this api is for the purpose of getting all products
export async function GET() {


    try {

  
        const products = await prisma.products.findMany();

        //disconnect prisoma to not cause traffic
        await prisma.$disconnect();

        return NextResponse.json(products);

    }
    catch (error) {

        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('something went wrong', { status: 400 });
    }


}