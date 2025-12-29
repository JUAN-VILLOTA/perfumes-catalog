import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import PerfumeDetail from "../pages/PerfumeDetail";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfume/:id" element={<PerfumeDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;