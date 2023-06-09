import Sidebar from "./components/Sidebar";
import { Route, Routes, BrowserRouter as Router, Form } from "react-router-dom";
import Home from "./components/Home";
type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <Sidebar></Sidebar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
