import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses([...courses,
    {
      ...course,
      _id: new Date().getTime()
    }]);
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div >
        <KanbasNavigation className="d-none d-md-block" />
        <div>
          <Routes>
            <Route path="Account" element={<Account />} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />
            } />
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} course={course}/>} />
            <Route path="Courses/" element={
              <div>
                <h1 className="ms-5 ps-5">Courses</h1>
                <h3 className="ms-5 ps-5"> Navigate to Dashboard to select a course.</h3>
              </div>} />
            <Route path="Calendar" element={<h1 className="ms-5 ps-5">Calendar</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;