import dbConnect from "@/lib/dbConnect";
import CarModel from "@/model/Car";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();
  const filterQueries = await req.json();

  try {
    let cars: any = [];

    console.log("filterQueries", filterQueries);
    if (
      filterQueries?.regYear.title === "All" &&
      filterQueries?.brand.title === "" &&
      filterQueries?.isCarNew === false &&
      filterQueries?.kmsDriven.title === "" &&
      filterQueries?.price.title === "" &&
      filterQueries?.carType.title === ""
    ) {
      cars = await CarModel.find();
    } else if (filterQueries?.isCarNew) {
      cars = await CarModel.find({ isCarNew: true });
    } else {
      const currentYear = new Date().getFullYear();

      const filterString = {
        regYear:
          filterQueries?.regYear.title !== "All"
            ? {
                $gte: filterQueries.regYear.value.rangeStart,
                $lte: filterQueries.regYear.value.rangeEnd,
              }
            : { $gte: 1900, $lte: currentYear },
        kmsDriven:
          filterQueries?.kmsDriven.title !== ""
            ? {
                $gte: filterQueries.kmsDriven.value.rangeStart,
                $lte: filterQueries.kmsDriven.value.rangeEnd,
              }
            : { $gte: 0, $lte: 1000000 },
        price:
          filterQueries?.price.title !== ""
            ? {
                $gte: filterQueries.price.value.rangeStart,
                $lte: filterQueries.price.value.rangeEnd,
              }
            : { $gte: 0, $lte: 10000000000 },
        carType:
          filterQueries?.carType.title !== ""
            ? filterQueries.carType.value
            : {},
        brand:
          filterQueries?.brand.title !== "" ? filterQueries.brand.value : {},

        isCarNew: filterQueries?.isCarNew === false ? false : true,
      };

      console.log("filter string run 18:42", filterString);
      // cars = await CarModel.find(filterString);
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
