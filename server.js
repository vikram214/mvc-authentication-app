import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());

app.use("/api/v1/todos", todoRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

try {
  await connectDB(process.env.MONGO_URI, process.env.DB_NAME);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Failed to connect to MongoDB:", error.message);
  process.exit(1);
}
