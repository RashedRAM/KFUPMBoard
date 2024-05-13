import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

export async function GET() {
    // const supabase = createServerComponentClient({ cookies });

    try {
        const productsCount = await prisma.Products.count();
        const skip = Math.floor(Math.random() * productsCount);

        const products = await prisma.Products.findMany({
            take: 5,
            skip: skip,
        });

        await prisma.$disconnect();
        return NextResponse.json(products);

    }
    catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('something went wrong', { status: 400 });
    }


}