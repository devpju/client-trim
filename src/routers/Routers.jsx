import { useSelector } from 'react-redux';
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';

const Routers = () => {
  const auth = useSelector(state => state.authReducer);
  return !auth.token ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
