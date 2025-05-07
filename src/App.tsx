import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout/layout";
// import HomePage from "./pages/HomePage";
// import InboxPage from "./pages/InboxPage";
// import CalendarPage from "./pages/CalenderPage";
// import SearchPage from "./pages/SearchPage";
// import SettingsPage from "./pages/SettingsPage";
import Page from "./components/Layout/dashboard";
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Page/>} />
        </Routes>
    </Router>
  );
}

export default App;