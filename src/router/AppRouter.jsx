import { Route, Routes } from "react-router-dom";
import { Amount } from "../pages/Amount";
import { Deals } from "../pages/Deals";
import { Dashboard } from "../pages/Dashboard";
import { Efforts } from "../pages/Efforts";
import { Projects } from "../pages/Projects";
import { Count } from "../pages/Count";
import { RFX } from "../pages/Rfx";
import { Stage } from "../pages/Stages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
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
