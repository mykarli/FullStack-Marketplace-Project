import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate replace to="/login" />;
  
  // Eğer admin sayfasıysa ve kullanıcı admin değilse engelle [cite: 11, 23, 27]
  if (role && user.role !== role) {
    return <Navigate replace to="/" />;
  }

  return children;
};

export default ProtectedRoute;