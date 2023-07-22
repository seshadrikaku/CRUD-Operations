import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
        
    },
    password:{
        type: String,
        required: true
    },
    contact:{
        type: Number,
        required: true
    },
    course:{
        type: String,
        required: true
    }
})

export default mongoose.model("user",userSchema)
