import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { product_id } = body;

    if (!product_id) {
      return new NextResponse('Product ID is required', { status: 400 });
    }

    const report = await prisma.reports.create({
      data: {
        product_id: parseInt(product_id),
      },
    });

    await prisma.$disconnect();
    return NextResponse.json(report);
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    return new NextResponse('An error occurred while creating the report.', { status: 500 });
  }
}

export async function handler(req, res) {
  if (req.method === 'POST') {
    return POST(req, res);
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
