import mongoose from "mongoose";

export const loadDB = async () => {
  mongoose.Promise = global.Promise;
  await mongoose.connect(process.env.MONGOOSE_URI!);
  console.log("$$ successfully connected to mongodb");
};
