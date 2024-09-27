import React, { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // For notifications

const Book = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const userId = localStorage.getItem('userId'); // Replace with the logged-in user's ID
  const navigate = useNavigate();

  // Fetch all books, wishlist, and cart
  const fetchAllBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/book/getAllBooks");
      setCategoryData(response?.data?.books || []);

      // Load wishlist from localStorage
      const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      setWishlist(storedWishlist);

      // Fetch cart from API
      const cartResponse = await axios.get(`http://localhost:5000/api/cart/get/${userId}`);
      setCart(cartResponse.data.cartItems || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const toggleWishlist = async (bookId) => {
    if (!bookId) return;

    try {
      const response = await axios.post("http://localhost:5000/api/wishlist/toggleWishlist", {
        userId,
        bookId,
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setWishlist((prevWishlist) => {
          const isInWishlist = prevWishlist.includes(bookId);
          const updatedWishlist = isInWishlist
            ? prevWishlist.filter((id) => id !== bookId)
            : [...prevWishlist, bookId];

          localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
          return updatedWishlist;
        });
      } else {
        toast.error("Failed to update wishlist. Please try again.");
      }
    } catch (error) {
      console.error("Error in toggleWishlist:", error.response ? error.response.data : error.message);
      toast.error("Error adding/removing item to/from wishlist");
    }
  };

  const addToCart = async (bookId) => {
    if (!bookId) return;

    try {
      const response = await axios.post("http://localhost:5000/api/cart/add", {
        userId,
        bookId,
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setCart((prevCart) => {
          const isInCart = prevCart.includes(bookId);
          const updatedCart = isInCart
            ? prevCart.filter((id) => id !== bookId)
            : [...prevCart, bookId];
          return updatedCart;
        });
      } else {
        toast.error("Failed to update cart. Please try again.");
      }
    } catch (error) {
      console.error("Error in addToCart:", error.response ? error.response.data : error.message);
      toast.error("Error adding/removing item to/from cart");
    }
  };

  // Filter books by selected category
  const filteredBooks = categoryData.filter((dataItem) => {
    return selectedCategory ? dataItem.category === selectedCategory : true;
  });

  const goWishlist = () => {
    navigate("/ecommerce/wishlist");
  };

  const goToCart = () => {
    navigate("/ecommerce/cart");
  };

  return (
    <div className="mt-[100px] mb-[200px]">
      <div className="flex ml-[1450px] mt-28">
        <FaShoppingCart className="text-xl text-gray-500 mr-6" onClick={goToCart} />
        <FaHeart className="text-xl text-gray-500" onClick={goWishlist} />
      </div>

      {/* Category Dropdown */}
      <div className="flex justify-center items-center mb-6 space-x-4">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border-2 border-gray-300 p-2 rounded-lg w-1/2 focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Category</option>
          {Array.from(new Set(categoryData.map((book) => book.category))).map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display filtered books */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((dataItem) => (
            <div key={dataItem._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 border relative">
              {/* Wishlist Icon */}
              <button
                onClick={() => toggleWishlist(dataItem._id)}
                className={`absolute top-2 right-2 w-7 h-7 mt-4 m-3 flex items-center justify-center rounded-full border-2 ${
                  wishlist.includes(dataItem._id) ? "bg-red-500 border-red-500" : "bg-gray-200 border-gray-300"
                } transition duration-200`}
              >
                <FaHeart className={`text-md ${wishlist.includes(dataItem._id) ? "text-white" : "text-gray-500"}`} />
              </button>

              {/* Image Section */}
              <div className="h-48 mb-4 flex justify-center items-center bg-gray-200">
                <img
                  src={dataItem.imageUrl || "https://via.placeholder.com/150"}
                  alt={dataItem.title}
                  className="object-contain h-full"
                />
              </div>

              {/* Book Details */}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{dataItem.title}</div>
                <p className="text-gray-700 text-base"><strong>Author:</strong> {dataItem.author}</p>
                <p className="text-gray-700 text-base"><strong>Category:</strong> {dataItem.category}</p>
                <p className="text-gray-700 text-base"><strong>Keyword:</strong> {dataItem.keyword}</p>
                <p className="text-gray-700 text-base"><strong>Price:</strong> {dataItem.price}</p>

                {dataItem.tags && dataItem.tags.length > 0 && (
                  <div className="mt-4">
                    <div className="flex flex-wrap mt-2">
                      {dataItem.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Add to Cart Button */}
              <div className="px-6 py-4 flex justify-center">
                <button
                  onClick={() => addToCart(dataItem._id)}
                  className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold w-[270px]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No books available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Book;


