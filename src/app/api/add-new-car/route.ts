import dbConnect from "@/lib/dbConnect";
import CarModel from "@/model/Car";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();

  try {
    const carData = await req.json();
    console.log(carData);
    const isIdTaken = await CarModel.findOne({ id: carData.id });
    if (isIdTaken) {
      return NextResponse.json(
        { message: "The ID is already taken - use a unique one" },
        { status: 409 }
      );
    }
    const createdCarEntry = await CarModel.create(carData);

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
