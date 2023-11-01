import { Link, useParams, useLocation } from "react-router-dom";
import db from "../Database";
import './course-nav.css';
import {FaEyeSlash} from "react-icons/fa";

function CourseNavigation({course}) {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades",
                "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", 
                "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list" style={{width:200}}>
      <p class="name-header mt-2 mb-2 ms-3">{course.name}</p>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-item-group  ${(pathname.includes(link) && "active") || (index == 4 && pathname.includes("AssignmentEditor") && "active")}`}>
          <div className="list-item">
            {link}
            {(index > 8 && index < 17) && <FaEyeSlash className="float-end eye-icon"/>}
            </div>
        </Link>
      ))}
     
    </div>

  );
}

export default CourseNavigation;