import { FaBars, FaGlasses } from "react-icons/fa";
import { useParams, useLocation } from "react-router";
import db from "../Database";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './home.css';
function CourseHeader() {
  const { courseId, assignmentId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  return (
    <div className="col col-12 ">
      <div className="btn btn-light float-end student-view d-flex">
        <div className="mx-2"><FaGlasses /></div>
        Student View
      </div>
      <Breadcrumb>
        <Breadcrumb.Item className="d-flex profile" href="#">
          <div className="d-flex profile">
            <div className=""><FaBars /></div>
            <div className="profile-name ">{course.name}</div>
          </div>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="d-flex profile mt-4" href="#">
          <div className="mt-0 profile-nav">
            {pathname.includes("Modules") && <div className="mt-0 profile-nav">Modules</div>}
            {pathname.includes("Home") && <div className="mt-0 profile-nav">Home</div>}
            {pathname.includes("Assignment") && <div className="mt-0 profile-nav">Assignments</div>}
            {pathname.includes("Grades") && <div className="mt-0 profile-nav">Grades</div>}
          </div>
          </Breadcrumb.Item>

      </Breadcrumb>
    </div>
  );
}
export default CourseHeader;
