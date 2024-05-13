import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

export async function GET(req, context) {
    // const supabase = createServerComponentClient({ cookies });

    try {
        // const { data: {user} } = await supabase.auth.getUser();

        // if (!user) {
        //     throw Error("User not found");
        // }
        const {id} = context.params;

        const product = await prisma.products.findFirst({
            where: {
                id: Number(id),
            },
        });

        await prisma.$disconnect();
        return NextResponse.json(product);

    }
    catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('something went wrong', { status: 400 });
    }


}