import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Skills from "./pages/Skills";
import Salary from "./pages/Salary";
import Experience from "./pages/Experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/jobs" element={<Jobs />} />

          <Route path="/jobs/:id" element={<JobDetails />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/salary" element={<Salary />} />

          <Route path="/experience" element={<Experience />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;