import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import LoginPage from './pages/authenticate/LoginPage';
import RegisterPage from './pages/authenticate/RegisterPage';
import ForumPage from './pages/forum/ForumPage';
import Thread from './pages/forum/Thread';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* authenticate */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<HomePage />} index />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />

        {/* path forum */}
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/forum/slug/:slug" element={<Thread />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
