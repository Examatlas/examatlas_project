import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const userId = localStorage.getItem('userId'); // Replace with logged-in user ID

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/wishlist/getWishlist/${userId}`);
        console.log(response.data); // Log the response data

        // Filter out items where bookId is null
        const itemsWithBooks = response?.data?.wishlistItems?.filter(item => item.bookId) || [];
        setWishlistItems(itemsWithBooks);
      } catch (error) {
        toast.error("Failed to fetch wishlist");
        console.log(error.response ? error.response.data : error.message); // More detailed error logging
      }
    };

    fetchWishlist();
  }, [userId]);

  const handleRemoveFromWishlist = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/wishlist/remove/${itemId}`);
      
      // Update the wishlist items state
      const updatedWishlistItems = wishlistItems.filter(item => item._id !== itemId);
      setWishlistItems(updatedWishlistItems);
      
      // Update localStorage after removing an item
      const updatedWishlist = updatedWishlistItems.map(item => item.bookId._id); // Get the book IDs of the remaining items
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Save updated wishlist to localStorage
      
      toast.success("Item removed from wishlist");
    } catch (error) {
      toast.error("Failed to remove item from wishlist");
      console.log(error.response ? error.response.data : error.message);
    }
  };

  const handleAddToCart = async (bookId) => {
    try {
      await axios.post(`http://localhost:5000/api/cart/add`, { userId, bookId });
      toast.success("Item added to cart");
    } catch (error) {
      toast.error("Failed to add item to cart");
      console.log(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600 mt-28">My Wishlist</h2>
      <p className="text-lg mb-4 text-center text-gray-500">Discover the books you love!</p>

      <div className="flex flex-wrap justify-center gap-6">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((wishlistItem) => (
            <div key={wishlistItem._id} className="w-full sm:w-80 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 mb-4 transition-transform transform hover:scale-105">
              {/* Check if bookId exists before rendering */}
              {wishlistItem.bookId ? (
                <>
                  <div className="h-48 mb-4 flex justify-center items-center bg-gray-200">
                    <img
                      src={wishlistItem.bookId.imageUrl || "https://via.placeholder.com/150"}
                      alt={wishlistItem.bookId.title}
                      className="object-contain h-full"
                    />
                  </div>

                  <div className="px-6 py-4 flex flex-col flex-grow">
                    <div className="font-bold text-xl mb-2 text-gray-800">{wishlistItem.bookId.title}</div>
                    <p className="text-gray-700 text-base">
                      <strong>Author:</strong> {wishlistItem.bookId.author}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Price:</strong> {wishlistItem.bookId.price}
                    </p>
                    <div className="flex gap-4 mt-4">
                      <button
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                        onClick={() => handleRemoveFromWishlist(wishlistItem._id)} // Using the item's unique _id for removal
                      >
                        Remove from Wishlist
                      </button>
                      <button
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                        onClick={() => handleAddToCart(wishlistItem.bookId._id)} // Assuming bookId has a unique ID
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <p>Book not available</p>
              )}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center  mb-[100px]">
            {/* <p className="font-semibold text-3xl text-gray-600 mb-6">Your wishlist is empty.</p> */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTxIUEMRi7XQdyjKVUx0tKyWDiydWFO_OMfg&s"
              alt="Empty Wishlist"
              className=" w-[500px] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
