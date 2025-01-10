import mongoose from "mongoose";
 export const  dbConnection=()=>{
    mongoose.connect(process.env.MONGODB_URI,{
        dbName: "Flavorly"
    })
    .then(()=>{
        console.log("DB Connected");
    })
    .catch((err)=>{
        console.log(`DB Connection Error, ${err}`);
    });
}
