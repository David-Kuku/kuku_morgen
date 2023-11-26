import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import TwoFactorAuthPage from '../pages/TwoFactorAuthPage';
import Page404 from '../pages/Page404';
import DashboardPage from '../pages/DashboardPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/verify/email' element = {<TwoFactorAuthPage/>}/>
        <Route path='/dashboard' element = {<DashboardPage/>}/>

        <Route path='*' element={<Page404 />} />

      </Routes>
    </Router>
  );
}
