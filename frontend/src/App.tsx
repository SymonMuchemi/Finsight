import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Registration, Home } from "./components/";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
