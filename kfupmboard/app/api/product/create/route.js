import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(req) {
    
    const supabase = createServerComponentClient({ cookies });

    try {
        const { data: {user} } = await supabase.auth.getUser();

        if (!user) {
            throw Error("User not found");
        }

        const body = await req.json();

        console.log(body.user_id);


        const res = await prisma.products.create({
            data: {
                user_id: body.user_id,
                title: body.title,
                description: body.description,
                building: parseInt(body.building),
                url: body.url,
                number: body.number,
            },
        });

        await prisma.$disconnect();
        return NextResponse.json(res);

    }
    catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('something went wrong', { status: 400 });
    }

 
}