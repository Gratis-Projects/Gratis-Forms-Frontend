import "./App.css";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TestComp from "./TestComp";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { PrimaryButton } from "./components/buttons";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <h1>Gratis Forms</h1>
      <Link to="/">
        <PrimaryButton style={{ margin: "20px" }}>Main Page</PrimaryButton>
      </Link>
      <Link to="/login">
        <PrimaryButton style={{ margin: "20px" }}>Login Page</PrimaryButton>
      </Link>
      <Link to="/test">
        <PrimaryButton style={{ margin: "20px" }}>Test Page</PrimaryButton>
      </Link>

      <Route exact path="/test" component={TestComp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register}/>
    </Router>
  );
}

export default App;
