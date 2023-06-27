import { Route, Routes } from "react-router-dom";
import { Amount } from "../scenes/amount";
import { Deals } from "../scenes/bar";
import Dashboard from "../scenes/dashboard";
import { Efforts } from "../scenes/effortsBar";
import Form from "../scenes/form";
import { Projects } from "../scenes/line";
import Pie from "../scenes/pie";
import { RFX } from "../scenes/rfx";
import { Stage } from "../scenes/stageBar";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/rfx" element={<RFX />} />
      <Route path="/form" element={<Form />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/efforts" element={<Efforts />} />
      <Route path="/stages" element={<Stage />} />
      <Route path="/count" element={<Pie />} />
      <Route path="/amount" element={<Amount />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};
