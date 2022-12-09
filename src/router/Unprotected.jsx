import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Unprotected({ children }) {
  const user = useSelector((state) => state.user.user);
  if (user !== null) return <Navigate to="/feed" />;
  return children;
}

export default Unprotected;
