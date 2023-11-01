import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import KanbasNavigation from "../KanbasNavigation";
import './dashboard.css';
import { FaEdit } from "react-icons/fa";
import { Card } from "react-bootstrap";

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {
    return (
        <div className="row no-gutters">
            <div className="col col-1 ms-0" style={{ width: 85 }}>
                <KanbasNavigation style={{ width: 85 }} />
            </div>
            <div className="col mt-3 ms-2" >
                <h1 className="heading">Dashboard</h1>
                <hr />
                <h3 className="published-courses">Published Courses </h3>
                <hr />
                <Card className="mx-4 px-1">
                    <h5 className="pt-2 px-2">Course</h5>
                    <div className="d-flex mx-2 my-2">
                        <input value={course.name} className="form-control mx-1"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                        <input value={course.number} className="form-control mx-1" style={{ width: 200 }}
                            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                        <input value={course.startDate} className="form-control mx-1" type="date" style={{ width: 350 }}
                            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                        <input value={course.endDate} className="form-control mx-1" type="date" style={{ width: 350 }}
                            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                        <div onClick={addNewCourse} className="btn btn-danger mx-1">
                            Add
                        </div>
                        <div onClick={updateCourse} className="btn btn-secondary mx-1">
                            Update
                        </div>
                    </div>
                </Card>

                <div className=" card-deck d-flex flex-row flex-wrap ">
                    {courses.map((course) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="nav-style me-2"
                            onClick={() => {setCourse(course); console.log("course name in dashboard: " + course.name)}}>
                            <div className="flex-wrap course-card my-3 mx-3" style={{ width: 275 }}>
                                <div className="card card-style me-2" >
                                    <img className="card-img-top card-img-size course1" alt="..." />
                                    <div className="card-body card-nav" >
                                        <p className="course1-name my-0">{course.name}</p>
                                        <p className="second-header my-0">{course._id}</p>
                                        <p className="third-header my-0">Term</p>
                                        <div
                                            className="btn btn-light mt-1 float-start"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}><FaEdit className="mt-0"/>
                                        </div>
                                        <div
                                            className="btn btn-light mt-1 float-end"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}>
                                            Delete
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default Dashboard;