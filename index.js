import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import bookRoute from "./Routes/bookRoute.js";
import UserRoutes from "./Routes/UserRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';

// Set up __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

// app.use(cors({
//   origin: "*", // You can set specific domains like ['http://localhost:3000']
//   methods: ["POST", "GET"],
//   credentials: true,
// }));

// app.use(cors())



// Middleware to parse JSON requests
app.use(express.json());

// API routes
app.use("/book", bookRoute);
app.use('/user', UserRoutes);
// Serve static files from the Frontend directory
app.use(express.static(path.join(__dirname, "Frontend", "dist")));

// Serve the index.html for the root route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
});

// MongoDB connection
mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    
    console.log('Connected to MongoDB');
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Default route for testing
// app.get('/', (req, res) => {
//   res.send('MERN API');
// });
export default app; 