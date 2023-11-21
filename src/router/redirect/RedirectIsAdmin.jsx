import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";


export default function RedirectIsAdmin({ children }) {
  const { user } = useAuthh();
  if (user.authUser?.userType !== "admin") {
    return <Navigate to={`/`} />;
  }
  return children;
}
