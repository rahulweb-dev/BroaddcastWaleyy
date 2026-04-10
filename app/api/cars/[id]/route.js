import { connectDB } from "../../../../lib/mongodb";
import Car from "../../../../models/Car";

export async function GET(req) {

  await connectDB();

  const cars = await Car.find();

  return Response.json({
    success: true,
    data: cars
  });

}