import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { TodosProvider } from "./context/TodosProvider";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <TodosProvider>
      <Router>
        <nav className="p-4  flex gap-4 w-full border-b mb-6">
          <ul className="flex gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </TodosProvider>
  );
}

export default App;
