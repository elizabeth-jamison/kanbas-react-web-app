import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = `${API_BASE}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-01", endDate: "2023-12-15",
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      ...courses,
      response.data
    ]);
    setCourse({ name: "New Course", number: "New Number",
    startDate: "2023-09-01", endDate: "2023-12-15"  });
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${courseId}`
    );
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    console.log("course: " + JSON.stringify(course));
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    console.log("response.data: " + JSON.stringify(response.data));
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        } else {
          return c;
        }
      })
    );
    findAllCourses();
    setCourse({ name: "New Course" });
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