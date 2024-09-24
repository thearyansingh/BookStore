import express from "express";
import { getBook } from "../Controller/BookController.js"; // Ensure the correct file path and .js extension

const router = express.Router();

// Define the route to get books
router.get('', getBook);

export default router; // Export the router so it can be used in the main server file
