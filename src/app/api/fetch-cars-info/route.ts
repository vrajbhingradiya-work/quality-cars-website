import dbConnect from "@/lib/dbConnect";
import CarModel from "@/model/Car";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();
  const filterQueries = await req.json();

  try {
    let cars = [];

    console.log("filterQueries", filterQueries);
    if (
      filterQueries?.regYear === "" &&
      filterQueries?.brand === "" &&
      filterQueries?.isCarNew === "" &&
      filterQueries?.kmsDriven === "" &&
      filterQueries?.price === "" &&
      filterQueries?.carType === ""
    ) {
      cars = await CarModel.find();
    } else {
      const currentYear = new Date().getFullYear();

      const filterString = {
        regYear:
          filterQueries?.regYear !== ""
            ? {
                $gte: filterQueries.regYear.value.rangeStart,
                $lte: filterQueries.regYear.value.rangeEnd,
              }
            : { $gte: currentYear - 100, $lte: currentYear },
        kmsDriven:
          filterQueries?.kmsDriven !== ""
            ? {
                $gte: filterQueries.kmsDriven.value.rangeStart,
                $lte: filterQueries.kmsDriven.value.rangeEnd,
              }
            : { $gte: 0, $lte: 1000000 },
        price:
          filterQueries?.price !== ""
            ? {
                $gte: filterQueries.price.value.rangeStart,
                $lte: filterQueries.price.value.rangeEnd,
              }
            : { $gte: 0, $lte: 10000000000 },
        carType:
          filterQueries?.carType !== "" ? filterQueries.carType.value : {},
        brand: filterQueries?.brand !== "" ? filterQueries.brand.value : {},
      };

      console.log("filter string run 18:42", filterString);
      cars = await CarModel.find(filterString);
      console.log(cars);
    }
    return NextResponse.json(
      { message: "Cars Info Fetched", cars: cars },
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
