import dbConnect from "@/lib/dbConnect";
import CarModel from "@/model/Car";

export async function POST(request: Request) {
  const { ...car } = request.json();
  await dbConnect();
  try {
    await CarModel.create();
  } catch (error: any) {}
}
