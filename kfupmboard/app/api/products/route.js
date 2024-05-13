import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

export async function GET() {
    // const supabase = createServerComponentClient({ cookies });

    try {

        const products = await prisma.Products.findMany();

        await prisma.$disconnect();
        return NextResponse.json(products);

    }
    catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('something went wrong', { status: 400 });
    }


}