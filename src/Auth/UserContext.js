// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const UserContext = createContext();

// export const UserProvider = ({ children,id }) => {
//   const [name, setName] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let isMounted = true;

//     const fetchUserName = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/user/get/${id}`);
        
//         if (response.data && response.data.name) {
//           if (isMounted) {
//             setName(response.data.name);
//           }
//         } else {
//           console.error('Name not found in response:', response.data);
//           setError('Name not found in response');
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error.message);
//         if (isMounted) {
//           if (error.response && error.response.status === 404) {
//             setError('User not found');
//           } else {
//             setError('Error fetching user data');
//           }
//         }
//       }
//     };

//     fetchUserName();

//     return () => {
//       isMounted = false;
//     };
//   }, [id]);

//   return (
//     <UserContext.Provider value={{ name, error }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext;
