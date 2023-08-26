import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Data from "./Data.jsx";

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/data" element={<Data/>} />
      </Routes>
    </Router>
  );
}
