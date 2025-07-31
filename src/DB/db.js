import mongoose from "mongoose";

export const connectDB =async ()=>{


try{

const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}`)
console.log(`MONGO DB CONNECTED !! HOST NAME IS ${connectionInstance.connection.host} `);
}
catch(error){
    console.error("MONGO DB FAILED FOR CONNECTED", error.message);
    process.exit(1)
}
}

