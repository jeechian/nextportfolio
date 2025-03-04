import mongoose from "mongoose";
export const ConnectDB= async()=>{
    await mongoose.connect("mongodb+srv://jeechian:jeechian4444@cluster0.og9iq.mongodb.net/portfolio");
    console.log("DB connected")
}
