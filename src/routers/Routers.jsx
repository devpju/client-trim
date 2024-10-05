import { useSelector } from 'react-redux';
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';

const Routers = () => {
  // Access the auth state from the store
  const auth = useSelector(state => state.authReducer);
  console.log(auth);
  return !auth.token ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
