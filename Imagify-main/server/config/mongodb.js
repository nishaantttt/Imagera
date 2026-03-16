import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Event listener for successful connection
        mongoose.connection.on("connected", () => {
            console.log("✅ Database connected");
        });

        // Event listener for connection errors after initial connect
        mongoose.connection.on("error", (err) => {
            console.error(`❌ Mongoose connection error: ${err}`);
        });

        // Connect using the URI from your .env file
        await mongoose.connect(process.env.MONGODB_URI);

    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;