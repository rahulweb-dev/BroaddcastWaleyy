import { connectDB } from "@/lib/mongodb"
import Car from "../../../../models/Car"
import { carsDatabase } from "../../../../lib/cars-database"

export async function GET() {

  await connectDB()

  await Car.deleteMany()

  await Car.insertMany(carsDatabase)

  return Response.json({
    success: true,
    message: "Cars Added Successfully"
  })

}