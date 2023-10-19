import { Link } from "react-router-dom";
import db from "../Database";
import KanbasNavigation from "../KanbasNavigation";
import './dashboard.css';
import { FaEdit } from "react-icons/fa";

function Dashboard() {
    const courses = db.courses;
    return (
        <div className="row no-gutters">
            <div className="col col-1 ms-0" style={{ width: 85 }}>
                <KanbasNavigation style={{ width: 85 }}/>
            </div>
            <div className="col mt-3 ms-2" >
                <h1 className="heading">Dashboard</h1>
                <hr />
                <div >
                    <h3 className="published-courses">Published Courses </h3>
                    <hr />
                    <div className=" card-deck d-flex flex-row flex-wrap ">
                        {courses.map((course) => (
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="nav-style me-2">
                                <div className="flex-wrap course-card my-3 mx-3" style={{ width: 275 }}>
                                    <div className="card card-style me-2" >
                                        <img className="card-img-top card-img-size course1" alt="..." />
                                        <div className="card-body card-nav">
                                            <p className="course1-name my-0">{course.name}</p>
                                            <p className="second-header my-0">{course._id}</p>
                                            <p className="third-header my-0">Term</p>
                                            <div><FaEdit /></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;