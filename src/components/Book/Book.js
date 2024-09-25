// import React, { useEffect, useState } from "react";
// import { FaHeart } from "react-icons/fa"; // Import the heart icon
// import axios from "axios";

// const Book = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [categoryData, setCategoryData] = useState([]);
//   const [wishlist, setWishlist] = useState({}); // State to track which books are in the wishlist

//   const fetchAllCategories = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/book/getAllBooks");
//       setCategoryData(response?.data?.books || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchAllCategories();
//   }, []);

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const toggleWishlist = (bookId) => {
//     setWishlist((prevWishlist) => ({
//       ...prevWishlist,
//       [bookId]: !prevWishlist[bookId], // Toggle the wishlist state for the selected book
//     }));
//   };

//   // Filter books by selected category
//   const filteredBooks = categoryData.filter((dataItem) => {
//     return selectedCategory ? dataItem.category === selectedCategory : true;
//   });

//   return (
//     <>
//       <div className="mt-[150px] mb-[200px]">
//         {/* Category Dropdown */}
//         <div className="flex justify-center mb-6">
//           <select
//             value={selectedCategory}
//             onChange={handleCategoryChange}
//             className="border-2 border-gray-300 p-2 rounded-lg w-1/2 focus:outline-none focus:border-blue-500"
//           >
//             <option value="">Select Category</option>
//             {/* Dynamically rendering category options from categoryData */}
//             {Array.from(new Set(categoryData.map((book) => book.category))).map(
//               (category, index) => (
//                 <option key={index} value={category}>
//                   {category}
//                 </option>
//               )
//             )}
//           </select>
//         </div>

//         {/* Display filtered books */}
//         <div className="flex flex-wrap justify-center gap-6">
//           {filteredBooks.length > 0 ? (
//             filteredBooks.map((dataItem, dataIndex) => (
//               <div
//                 key={dataIndex}
//                 className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 border relative"
//               >
//                 {/* Wishlist Button with Heart Icon in a Circle */}
//                 <button
//                   onClick={() => toggleWishlist(dataItem.id)}
//                   className={`absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full border-2 ${
//                     wishlist[dataItem.id] ? "bg-red-500 border-red-500" : "bg-gray-200 border-gray-300"
//                   } hover:bg-gray-300 transition duration-200`}
//                 >
//                   <FaHeart className={`text-xl ${wishlist[dataItem.id] ? "text-white" : "text-gray-500"}`} />
//                 </button>

//                 {/* Image Section */}
//                 <div className="h-48 mb-4 flex justify-center items-center bg-gray-200">
//                   <img
//                     src={dataItem.imageUrl || "https://via.placeholder.com/150"}
//                     alt={dataItem.title}
//                     className="object-contain h-full"
//                   />
//                 </div>

//                 {/* Book Details */}
//                 <div className="px-6 py-4">
//                   {/* Title */}
//                   <div className="font-bold text-xl mb-2">{dataItem.title}</div>

//                   {/* Author */}
//                   <p className="text-gray-700 text-base"><strong>Author:</strong> {dataItem.author}</p>

//                   {/* Category */}
//                   <p className="text-gray-700 text-base"><strong>Category:</strong> {dataItem.category}</p>

//                   {/* Keyword */}
//                   <p className="text-gray-700 text-base"><strong>Keyword:</strong> {dataItem.keyword}</p>

//                   {/* Price */}
//                   <p className="text-gray-700 text-base"><strong>Price:</strong> ${dataItem.price}</p>

//                   {/* Tags */}
//                   {dataItem.tags && dataItem.tags.length > 0 && (
//                     <div className="mt-4">
//                       <div className="flex flex-wrap mt-2">
//                         {dataItem.tags.map((tag, tagIndex) => (
//                           <span
//                             key={tagIndex}
//                             className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//                           >
//                             #{tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Add to Cart Button */}
//                 <div className="px-6 py-4 flex justify-center">
//                   <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No books available in this category.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Book;



import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa"; // Import the heart icon
import axios from "axios";

const Book = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [wishlist, setWishlist] = useState({}); // State to track which books are in the wishlist

  const fetchAllCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/book/getAllBooks");
      setCategoryData(response?.data?.books || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const toggleWishlist = (bookId) => {
    // Set the heart to red for the clicked book only
    setWishlist((prevWishlist) => ({
      ...prevWishlist,
      [bookId]: !prevWishlist[bookId], // Toggle the wishlist state for the selected book
    }));
  };

  // Filter books by selected category
  const filteredBooks = categoryData.filter((dataItem) => {
    return selectedCategory ? dataItem.category === selectedCategory : true;
  });

  return (
    <>
      <div className="mt-[150px] mb-[200px]">
        {/* Category Dropdown */}
        <div className="flex justify-center mb-6">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border-2 border-gray-300 p-2 rounded-lg w-1/2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Category</option>
            {/* Dynamically rendering category options from categoryData */}
            {Array.from(new Set(categoryData.map((book) => book.category))).map(
              (category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
        </div>

        {/* Display filtered books */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((dataItem, dataIndex) => (
              <div
                key={dataIndex}
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 border relative"
              >
                {/* Wishlist Button with Heart Icon in a Circle */}
                <button
                  onClick={() => toggleWishlist(dataItem.id)}
                  className={`absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                    wishlist[dataItem.id] ? "bg-red-500 border-red-500" : "bg-gray-200 border-gray-300"
                  }  transition duration-200`}
                >
                  <FaHeart className={`text-xl ${wishlist[dataItem.id] ? "text-white" : "text-gray-500"}`} />
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
                  {/* Title */}
                  <div className="font-bold text-xl mb-2">{dataItem.title}</div>

                  {/* Author */}
                  <p className="text-gray-700 text-base"><strong>Author:</strong> {dataItem.author}</p>

                  {/* Category */}
                  <p className="text-gray-700 text-base"><strong>Category:</strong> {dataItem.category}</p>

                  {/* Keyword */}
                  <p className="text-gray-700 text-base"><strong>Keyword:</strong> {dataItem.keyword}</p>

                  {/* Price */}
                  <p className="text-gray-700 text-base"><strong>Price:</strong> {dataItem.price}</p>

                  {/* Tags */}
                  {dataItem.tags && dataItem.tags.length > 0 && (
                    <div className="mt-4">
                      <div className="flex flex-wrap mt-2">
                        {dataItem.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Add to Cart Button */}
                <div className="px-6 py-4 flex justify-center">
                  <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold w-[270px]">
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
    </>
  );
};

export default Book;
