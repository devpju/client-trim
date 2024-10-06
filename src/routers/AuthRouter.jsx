import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, SignUp } from '../pages/index.js';
import VerifyOTP from '@/pages/auth/VerifyOTP.jsx';

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/verify' element={<VerifyOTP />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AuthRouter;
