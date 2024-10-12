import dbConnect from "@/lib/dbConnect";
import CarModel from "@/model/Car";

export async function POST(req: Request) {
  const car = await req.json();
  await dbConnect();
  try {
    const response = await CarModel.deleteOne({ id: car.id });
    if (!response) {
      return Response.json({ error: response }, { status: 500 });
    }
    return Response.json(
      { message: `successfully deleted ${response}` },
      { status: 201 }
    );
  } catch (error: any) {
    return Response.json({ error: error }, { status: 500 });
  }
}
