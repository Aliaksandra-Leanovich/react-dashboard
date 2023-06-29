import { Route, Routes } from "react-router-dom";
import { Deals } from "../pages/Deals";
import { Amount } from "../pages/Amount";
import { Count } from "../pages/Count";
import { Efforts } from "../pages/Efforts";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { RFX } from "../pages/Rfx";
import { Stage } from "../pages/Stages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rfx" element={<RFX />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/efforts" element={<Efforts />} />
      <Route path="/stages" element={<Stage />} />
      <Route path="/count" element={<Count />} />
      <Route path="/amount" element={<Amount />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};
