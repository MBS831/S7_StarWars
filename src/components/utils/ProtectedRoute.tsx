import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  user,
  redirectPath = "/login",
}: {
  user: boolean;
  redirectPath: string;
}): JSX.Element => {
  if (!user) {
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;