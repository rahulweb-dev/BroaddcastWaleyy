import mongoose from "mongoose"

const CarSchema = new mongoose.Schema({
name:String,
brand:String,
price:Number,
images:[String],
dealerId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Dealer"
}
})

export default mongoose.models.Car || mongoose.model("Car",CarSchema)