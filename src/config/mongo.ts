import "dotenv/config"
import { connect } from "mongoose"

async function dbConnect(): Promise<void>{
    //para local se le cambia @localhost
    const DB_URI = "mongodb://root:123456@tender_hopper:27017/Test?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";
    await connect(DB_URI);
}

export default dbConnect();