require("dotenv").config();
const mockDate = require("./MOCK_DATA.json");
const connectDB = require("./db/connect");
const Job = require("./models/Job");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.deleteMany({});
    await Job.create(mockDate);
    console.log("Success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
