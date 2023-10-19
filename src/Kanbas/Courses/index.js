import { useParams, useLocation } from "react-router";
import CourseNavigation from "../CourseNavigation";
import db from "../Database";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import KanbasNavigation from "../KanbasNavigation";
import Grades from "../Grades";
import './home.css';
import CourseStatus from "./CourseStatus";
import CourseHeader from "./header";
import "./module-dropdown.css";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  return (
    <div >
      <div className="row no-gutters ">
        <div className="d-none d-md-block col-1" style={{ width: 85 }}>
          <KanbasNavigation />
        </div>
        <div className="col ">
          <CourseHeader className="d-none d-md-block" />
          <hr className="mb-0" />
          <div className="row no-gutters  mt-0 mb-0 ms-0 me-0 ">
            <div className="d-none d-lg-block col-3 list ms-0" style={{ width: 200 }}>
              <CourseNavigation  />
            </div>
            <div className="col ms-0">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="AssignmentEditor/:assignmentId/*" element={<AssignmentEditor />} />
                <Route path="Grades" element={<Grades />} />
              </Routes>
            </div>
            {pathname.includes("Home") &&
              <div className="d-none d-xl-block col col-3 mt-2 " style={{ width: 275 }}>
                <CourseStatus />
              </div>}
          </div>
        </div>
      </div>


    </div>


  );
}

export default Courses;
