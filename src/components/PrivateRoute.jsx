import { Navigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

function PrivateRoute({ children }) {
  const { usuario } = useAuth();

  if (!usuario) {
    return <Navigate to="/login" />
  };

  return children;
};

export default PrivateRoute;