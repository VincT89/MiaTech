import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodosProvider } from "./context/TodosProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";

function App() {
  return (
    <TodosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </TodosProvider>
  );
}

export default App;
