import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import Notification from "./components/Notification";
import Search from "./components/Search";
import SinglePage from "./components/SinglePage";
import ErrorPage from "./error/errorPage";
import ChatPage from "./page/ChatPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import PlayerPage from "./page/PlayerPage";
import ProfilePage from "./page/ProfilePage";
import RegisterPage from "./page/RegisterPage";
import SelectedPlayerPage from "./page/selectedPlayerPage";
import SignupPage from "./page/SignupPage";
import WaitingPage from "./page/waitingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* player pages */}

        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/waiting" element={<WaitingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="/selectedplayer" element={<SelectedPlayerPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/singlePage" element={<SinglePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/all" element={<AllPlayers />} />
        <Route path="/notification" element={<Notification />} />

        {/* erro Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
