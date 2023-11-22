import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";


export default function RedirectIsAdmin({ children }) {
  const { authUser } = useAuth();
  console.log(authUser?.role, "ADMIN");
  if (authUser?.role !== "ADMIN") {
    return <Navigate to={`/auth`} />
  }
  return children;
}
