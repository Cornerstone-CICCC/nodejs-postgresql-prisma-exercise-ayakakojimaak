import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import productRouter from "./routes/product.routes"; // Ensure the file exists at './routes/productRouter.ts'
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/product", productRouter);

// Fallback
app.use((req: Request, res: Response) => {
  res.status(404).send("Invalid route!");
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
