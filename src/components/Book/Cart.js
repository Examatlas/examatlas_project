import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast"; // Ensure to import toast for notifications

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);
  const userId = localStorage.getItem('userId'); // Ensure userId is stored in localStorage upon login

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        console.log("Fetching cart items...");
        const response = await axios.get(`http://localhost:5000/api/cart/get/${userId}`);
        console.log("Cart items response:", response.data);

        // Accessing the items from the response
        const itemIds = response.data.cart?.items || []; // Adjusted to access the items array
        console.log("Item IDs in cart:", itemIds);

        const booksResponse = await axios.get("http://localhost:5000/api/book/getAllBooks");
        console.log("Books response:", booksResponse.data);

        const allBooks = booksResponse.data.books || [];
        const itemsInCart = allBooks.filter(book => itemIds.includes(book._id));
        console.log("Books in cart:", itemsInCart);

        setBookDetails(itemsInCart);
        setCartItems(itemIds);
      } catch (error) {
        toast.error("Error fetching cart items."); // Adding toast notifications for error handling
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [userId]);

  const handleRemoveFromCart = async (bookId) => {
    try {
      const response = await axios.post("http://localhost:5000/api/cart/remove", {
        userId,
        bookId,
      });

      if (response.status === 200) {
        setCartItems((prevItems) => prevItems.filter(item => item !== bookId));
        setBookDetails((prevDetails) => prevDetails.filter(book => book._id !== bookId));
        toast.success("Item removed from cart."); // Notification for successful removal
      }
    } catch (error) {
      toast.error("Error removing item from cart."); // Error handling
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <div className="mt-[100px] mb-[200px]">
      <h1 className="text-2xl font-bold text-center">Your Cart</h1>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {bookDetails.length > 0 ? (
          bookDetails.map((book) => (
            <div key={book._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 border relative">
              <img
                src={book.imageUrl || "https://via.placeholder.com/150"}
                alt={book.title}
                className="h-48 object-contain mb-4"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.title}</div>
                <p className="text-gray-700 text-base"><strong>Author:</strong> {book.author}</p>
                <p className="text-gray-700 text-base"><strong>Category:</strong> {book.category}</p>
                <p className="text-gray-700 text-base"><strong>Keyword:</strong> {book.keyword}</p>
                <p className="text-gray-700 text-base"><strong>Price:</strong> ${book.price}</p>
              </div>
              <div className="px-6 py-4 flex justify-between">
                <button
                  onClick={() => handleRemoveFromCart(book._id)}
                  className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 font-semibold w-full"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
