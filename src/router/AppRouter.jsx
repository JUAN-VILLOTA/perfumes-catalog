import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PerfumeDetail from "../pages/PerfumeDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfume/:id" element={<PerfumeDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;