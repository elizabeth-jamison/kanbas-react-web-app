import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Kanbas() {
  return (
    <div >
      <KanbasNavigation className="d-none d-md-block"/>
      <div>
        <Routes>
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Courses/" element={
            <div>
              <h1 className="ms-5 ps-5">Courses</h1>
              <h3 className="ms-5 ps-5"> Navigate to Dashboard to select a course.</h3>
              </div>} />
          <Route path="Calendar" element={<h1 className="ms-5 ps-5">Calendar</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;