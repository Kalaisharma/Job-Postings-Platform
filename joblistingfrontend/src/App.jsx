import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import JobPostingsPage from "./Components/JobPostingPage";
import Home from "./Pages/Home";
import Talents from "./Pages/FindTalents";
import AboutUs from "./Pages/AboutUs";
import Testimonials from "./Pages/Testimonials";

export const ModalContext = createContext();
export const JobsContext = createContext();
export const FilteredJobsContext = createContext();
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState({});
  return (
    <>
      <BrowserRouter>
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
          <JobsContext.Provider value={{ jobs, setJobs }}>
            <FilteredJobsContext.Provider
              value={{ filteredJobs, setFilteredJobs }}
            >
              <Routes>
                <Route path="/" element={<JobPostingsPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/talents" element={<Talents />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/testimonials" element={<Testimonials />} />
              </Routes>
            </FilteredJobsContext.Provider>
          </JobsContext.Provider>
        </ModalContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
