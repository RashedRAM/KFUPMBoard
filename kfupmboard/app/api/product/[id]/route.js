import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";


// this api is to get a specific product by its id
export async function GET(req, context) {

    try {
        const {id} = context.params;

        const product = await prisma.products.findFirst({
            where: {
                id: Number(id),
            },
        });

        //disconnect prisoma to not cause traffic 
        await prisma.$disconnect();
        return NextResponse.json(product);

    }
    catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('something went wrong', { status: 400 });
    }


}