import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  if (!user) {
    return navigate("/");
  } else {
    return children;
  }
};
