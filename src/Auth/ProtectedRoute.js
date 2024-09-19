// import { Outlet, Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";
// import toast from "react-hot-toast"

// const ProtectedRoute = () => {
//   const { user } = useContext(AuthContext);

//   return user ? <Outlet /> : <Navigate to="/" />
//   toast.success("please login !! ")
// };

// export default ProtectedRoute;


import { Outlet, Navigate } from "react-router-dom";
import { useContext, useMemo } from "react";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);

  // Memoize the logic for showing toast
  useMemo(() => {
    if (!user) {
      toast.success("Please login first !!");
    }
  }, [user]);

  return user ? <Outlet /> : <Navigate to="/home" />;
};

export default ProtectedRoute;
