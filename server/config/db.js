import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongodb+srv://salman121:786salman121@cluster0.ifme6tl.mongodb.net/marketing);
    console.log(
      `Connected to MongoDB Server ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`Error in MongoDB Server`, error);
  }
};

export default connectDB;
