import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
    console.log("flag1")
export async function GET() {
    // const supabase = createServerComponentClient({ cookies });
    console.log("flag2")
    try {

        console.log("flag3")
        const products = await prisma.Products.findMany();

        await prisma.$disconnect();
        console.log("flag4")
        return NextResponse.json(products);

    }
    catch (error) {
        console.log("flag5")
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('something went wrong', { status: 400 });
    }


}