import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./error/errorPage";
import ChatPage from "./page/ChatPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import PlayerPage from "./page/PlayerPage";
import ProfilePage from "./page/ProfilePage";
import RegisterPage from "./page/RegisterPage";
import SelectedPlayerPage from "./page/selectedPlayerPage";
import SignupPage from "./page/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

              {/* player pages */}

        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="/selectedplayer" element={<SelectedPlayerPage />} />
        <Route path="/register" element={<RegisterPage />} />
       
               {/* erro Page */}
          <Route path="*" element={<ErrorPage/>} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
