import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello anh em</h1>
      <nav className="navbody">
        <Link to="invoices">Invoices</Link> |{" "}
        <Link to="expresses">Expresses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
