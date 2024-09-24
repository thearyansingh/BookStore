import Book from "../Modal/Book_Modal.js"; // Ensure .js extension

// Controller function to get books
export const getBook = async (req, res) => {
    console.log("a");
    
    try {
        const books = await Book.find(); // Fetch all books from the database
        console.log(books);
        res.status(200).json(books); // Send the books as a JSON response
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Error fetching books", error });
    }
};
