import Sidebar from "./components/Sidebar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Gen from "./components/Gen";
type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <Router>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gen" element={<Gen />} />
        </Routes>
      </Router>
    </div>
  );
}
