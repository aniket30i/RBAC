import "./App.css";
import LoginBackground from "./components/Login/LoginBackground";
import Provider from "./context/provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./components/AdminPage/AdminPage";
import UserPage from "./components/UserPage/UserPage";

function App() {
  return (
    <Router>
      <Provider>
        {/* <div className="bg-black min-h-screen h-full"> */}
        <Routes>
          <Route path="/" element={<LoginBackground />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
        {/* </div> */}
      </Provider>
    </Router>
  );
}

export default App;
