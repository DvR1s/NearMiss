import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ReportForm from "../report_form/ReportForm";
import Submited from "../submited/Submited";

import AppCSS from "./app.module.css";

const LOCAL_STORAGE_KEY = "nearMiss.reports";

function App() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedReports) setReport(storedReports);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(report));
  }, [report]);

  function signOff(id) {
    const newReports = [...report];
    const rep = newReports.find((rep) => rep.id === id);
    rep.complition = "Completed";
    rep.completed = !rep.completed;
    setReport(newReports);
  }

  function removeReport(id) {
    setReport((oldReports) => {
      return oldReports.filter((rep) => rep.id !== id);
    });
  }

  return (
    <div className={AppCSS.mainContainer}>
      <div className={AppCSS.linksContainer}>
        <Link to="/">Report</Link>
        <Link to="/submited">Submited Reports</Link>
      </div>
      <Routes className={AppCSS.pageContainer}>
        <Route path="/" element={<ReportForm setReport={setReport} />} />
        <Route
          path="/submited"
          element={
            <Submited
              report={report}
              signOff={signOff}
              removeReport={removeReport}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
