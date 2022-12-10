import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected({ children }) {
  const user = useSelector((state) => state.user.user);
  if (user === null) return <Navigate to="/" />;
  return children;
}

export default Protected;
