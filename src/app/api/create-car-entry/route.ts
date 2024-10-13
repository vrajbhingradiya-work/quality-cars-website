import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import CarModel from "@/model/Car";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();

  try {
    const car = await req.json();
    const createdCarEntry = await CarModel.create(car);

    return NextResponse.json(
      { message: "Car Info added.", car: createdCarEntry },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
