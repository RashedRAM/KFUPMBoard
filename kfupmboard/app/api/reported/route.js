import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const reports = await prisma.reports.findMany({
      include: {
        product: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    await prisma.$disconnect();
    return NextResponse.json(reports);
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    return new NextResponse('An error occurred while fetching the reported items.', { status: 500 });
  }
}

export async function handler(req, res) {
  if (req.method === 'GET') {
    return GET(req, res);
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
