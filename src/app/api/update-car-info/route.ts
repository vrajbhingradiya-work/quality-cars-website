import dbConnect from "@/lib/dbConnect";
import CarModel from "@/model/Car";

export async function PUT(req: Request) {
  const car = await req.json();
  await dbConnect();
  try {
    const response = await CarModel.replaceOne({ id: car.id }, car);

    if (response.matchedCount === 0) {
      // No document matched the filter
      return Response.json(
        { error: "No car found with the given ID" },
        { status: 404 }
      );
    }

    if (response.modifiedCount === 0) {
      // The document was found but not replaced
      return Response.json(
        { message: "No changes were made to the car" },
        { status: 200 }
      );
    }

    // Successfully replaced
    return Response.json(
      { message: "Car Info successfully Updated" },
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
