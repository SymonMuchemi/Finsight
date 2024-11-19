import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Registration } from "./components/";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Switch>
    </Router>
  );
}

export default App;
