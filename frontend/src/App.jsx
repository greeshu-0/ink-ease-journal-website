import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Journals from "./pages/Journals";
import Vault from "./pages/Vault";
import Connect from "./pages/Connect";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Meditations from "./pages/Meditations";
import Affirmations from "./pages/Affirmations";
import JournalPrompts from "./pages/JournalPrompts";
import MoodTracker from "./pages/MoodTracker";
import SelfHelpReads from "./pages/SelfHelpReads";
import CreativeTherapy from "./pages/CreativeTherapy";
import PrivateRoute from "./routes/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/journals"
        element={
          <PrivateRoute>
            <Journals />
          </PrivateRoute>
        }
      />
      <Route
        path="/vault"
        element={
          <PrivateRoute>
            <Vault />
          </PrivateRoute>
        }
      />
      <Route
        path="/connect"
        element={
          <PrivateRoute>
            <Connect />
          </PrivateRoute>
        }
      />
      <Route path="/logout" element={<Logout />} />
      <Route path="/meditation" element={<Meditations />} />
      <Route path="/affirmation" element={<Affirmations />} />
      <Route path="/journalprompts" element={<JournalPrompts />} />
      <Route path="/moodtracker" element={<MoodTracker />} />
      <Route path="/selfhelpread" element={<SelfHelpReads />} />
      <Route path="/creativetherapy" element={<CreativeTherapy />} />
      <Route path="/profilepage" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
