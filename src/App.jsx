import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Passwords } from "./pages/Passwords/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/passwords" element={<Passwords />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
