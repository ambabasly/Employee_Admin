import mongoose from "mongoose";

export const connectDb = (url: string): Promise<typeof mongoose> => {
  return mongoose.connect(url)

}

