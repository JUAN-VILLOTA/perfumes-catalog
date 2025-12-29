import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PerfumeDetail from "../pages/PerfumeDetail";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfume/:id" element={<PerfumeDetail />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;