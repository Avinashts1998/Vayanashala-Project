import "dotenv/config";
import * as mongoose from "mongoose";

class DBService {
  public async createClientDbConnection() {
    let database : any

    const clientOption : any = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };
    let connectionString = process.env.MONGO_URL
    database = mongoose.createConnection(`${connectionString}`, { ...clientOption });
    database.once("open", async () => {
      console.log("Connected to database hureyy");
    });
    database.on("error", () => {
      console.log("Error connecting to database");
    });
    return database;
  }
 
}
export default DBService;
