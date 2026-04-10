import {connectDB} from "@/lib/mongodb"
import User from "../../../models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(req){


  await connectDB()

const {email,password} = await req.json()

const user = await User.findOne({email})

if(!user){
return Response.json({error:"User not found"})
}

const match = await bcrypt.compare(password,user.password)

if(!match){
return Response.json({error:"Invalid password"})
}

const token = jwt.sign(
{ id:user._id, role:user.role },
process.env.JWT_SECRET
)

return Response.json({
token,
role:user.role
})

}