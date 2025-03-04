import { ConnectDB } from "@/app/lib/config/db";
import Rate from "@/app/lib/models/RateModel";
const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export async function POST(request) {
    const formData=await request.formData()    
    const commentData={
      name:`${formData.get('name')}`,
      email:`${formData.get('email')}`,
      comment:`${formData.get('comment')}`,
      liked:`${formData.get('liked')}`
      

    }
    await Rate.create(commentData)
    return NextResponse.json({success:true,msg:"comment add"})
}

export async function GET(request){
  const ratings = await Rate.find().sort({ date: -1 }); 
  return NextResponse.json( {ratings} )
}