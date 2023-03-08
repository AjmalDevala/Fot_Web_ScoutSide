import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import Notification from "./components/Notification";
import SinglePage from "./components/SinglePage";
import ErrorPage from "./error/errorPage";
import ChatPage from "./page/ChatPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import PlayerPage from "./page/PlayerPage";
import ProfilePage from "./page/ProfilePage";
import RegisterPage from "./page/RegisterPage";
import SelectedPlayerPage from "./page/SelectedPlayerPage";
import SignupPage from "./page/SignupPage";
import WaitingPage from "./page/WaitingPage";
import ProtectedRoutes from '../ProtectedRoutes'
import SearchPage from "./page/searchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* player pages */}

        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/waiting" element={<WaitingPage />} />
        <Route path="/home" element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
        <Route path="/chat" element={<ProtectedRoutes><ChatPage /></ProtectedRoutes>} />
        <Route path="/profile" element={<ProtectedRoutes><ProfilePage /></ProtectedRoutes>} />
        <Route path="/player" element={<ProtectedRoutes><PlayerPage /></ProtectedRoutes>} />
        <Route path="/selectedplayer" element={<ProtectedRoutes><SelectedPlayerPage /></ProtectedRoutes>} />
        <Route path="/singlePage" element={<ProtectedRoutes><SinglePage /></ProtectedRoutes>} />
        <Route path="/search" element={<ProtectedRoutes><SearchPage /></ProtectedRoutes>} />
        <Route path="/all" element={<ProtectedRoutes><AllPlayers /></ProtectedRoutes>} />
        <Route path="/notification" element={<Notification />} />

        {/* erro Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
