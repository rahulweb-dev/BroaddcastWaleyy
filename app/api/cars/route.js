import { connectDB } from "../../../lib/mongodb";
import Car from "../../../models/Car";

export async function GET() {
  try {
    await connectDB();

    const cars = await Car.find();

    return Response.json({
      success: true,
      data: cars,
    });

  } catch (error) {
    console.error("Cars API Error:", error);

    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}