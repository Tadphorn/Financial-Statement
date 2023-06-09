import Sidebar from "./components/Sidebar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import GenReport from "./components/GenReport";
type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <h1 className="text-5xl p-10 main">Income-Expense App</h1>
      <Router>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gen" element={<GenReport />} />
        </Routes>
      </Router>
    </div>
  );
}
