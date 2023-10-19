import {
    FaFileImport, FaBan, FaCheckCircle, FaArrowRight, FaBullseye, FaChartBar, FaBullhorn, FaBell,
    FaCircle, FaTimes, FaCalendar
} from "react-icons/fa";
import './course-status.css';

function CourseStatus() {
    return (
        <div className="status-col" style={{ width: 250 }}>
            <p className="course-status-name">Course Status</p>
            <button className="btn btn-light button " >
                <div className="d-flex">
                    <div className="course-status-icon"><FaBan /></div>
                    Unpublish
                </div>
            </button>
            <button className="btn btn-success button ">
                <div className="d-flex">
                    <div className="link-icon"> <FaCheckCircle /></div>
                    Published
                </div>
            </button>
            <div className="flex-column " style={{ width: 240 }}>
                <div className="btn btn-light status-col select-buttons" >
                    <a className="course-status-links d-flex" href="#">
                        <div className="course-status-icons"><FaFileImport /></div>
                        Import Existing Content </a></div>
                <div className="btn btn-light status-col select-buttons" >
                    <a className="course-status-links d-flex" href="#">
                        <div className="course-status-icons"><FaArrowRight /></div>
                        Import From Commons</a></div>
                <div className="btn btn-light status-col select-buttons" >
                    <a className="course-status-links d-flex" href="#">
                        <div className="course-status-icons"><FaBullseye /></div>
                        Choose Home Page</a></div>
                <div className="btn btn-light status-col select-buttons" >
                    <a className="course-status-links d-flex" href="#">
                        <div className="course-status-icons"><FaChartBar /></div>
                        View Course Stream</a></div>
                <div className="btn btn-light status-col select-buttons" >
                    <a className="course-status-links d-flex" href="#">
                        <div className="course-status-icons"><FaBullhorn /></div>
                        New Announcement</a></div>
                <div className="btn btn-light status-col select-buttons" >
                    <a className="course-status-links d-flex" href="#">
                        <div className="course-status-icons"><FaChartBar /></div>
                        New Analytics</a></div>
                <div className="btn btn-light status-col select-buttons" >
                    <a className="course-status-links d-flex" href="#">
                        <div className="course-status-icons"><FaBell /></div>
                        View Course Notifications</a></div>
            </div>
            <p className="todo todo-height"> To Do</p>
            <hr />
            <div className="assignment">
                <div className="float-start assignment-icon"><FaCircle /></div>
                <div className="float-end x-icon"><FaTimes /></div>
                <div>
                    <p className="cs-assignment-name">Grade A1 - ENV + HTML</p>
                    <p className="cs-assignment-description">100 points Sep 18 at 11:59pm</p>
                </div>
            </div>
            <div className="d-flex-inline coming-up">
                <p className="todo float-start">Coming Up</p>
                <a href="#" className="float-end calendar">
                    <div className="float-end calendar-icon"><FaCalendar /></div>
                    View Calendar</a>

            </div>
            <hr />
            <div className="todo-item">
                <a className="course-status-links" href="#">
                    <div className="float-start calendar-icon"><FaCalendar /></div>
                    <p className="todo-title">Lecture</p>
                    <p className="todo-description">CS4550.12631.202410</p>
                    <p className="todo-description">Sep 7 at 11:45am</p>
                </a>
            </div>
            <div className="todo-item">
                <a className="course-status-links" href="#">
                    <div className="float-start calendar-icon"><FaCalendar /></div>
                    <p className="todo-title">Lecture</p>
                    <p className="todo-description">CS4550.12631.202410</p>
                    <p className="todo-description">Sep 11 at 11:45am</p>
                </a>
            </div>
            <div className="todo-item">
                <a className="course-status-links" href="#">
                    <div className="float-start calendar-icon"><FaCalendar /></div>
                    <p className="todo-title">Lecture</p>
                    <p className="todo-description">CS5610 SP23 Lecture</p>
                    <p className="todo-description">Sep 11 at 6pm</p>
                </a>
            </div>

        </div>
    );
}
export default CourseStatus;