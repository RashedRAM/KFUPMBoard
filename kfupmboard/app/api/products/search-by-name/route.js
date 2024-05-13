import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

export async function GET(req, context) {
    // const supabase = createServerComponentClient({ cookies });

    try {
        const { title } = context.params;

        const items = await prisma.Products.findMany({
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