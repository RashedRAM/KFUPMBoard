import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";


//this function served to return product purely by its name for the search bar
export async function GET(req, context) {

    //will only take 5 products
    try {
        const { title } = context.params;

        const items = await prisma.products.findMany({
            take: 5, 
            where: {
                title: {
                    contains: title,
                    mode: "insensitive"
                }
            }
        });

        await prisma.$disconnect();
        return NextResponse.json(items);

    }
    catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('something went wrong', { status: 400 });
    }


}