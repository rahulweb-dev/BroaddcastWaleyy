import {connectDB} from "@/lib/mongodb"
import Dealer from "../../models/Dealer"

export async function POST(req){

await connectDB()

const body = await req.json()

const dealer = await Dealer.create(body)

return Response.json(dealer)

}