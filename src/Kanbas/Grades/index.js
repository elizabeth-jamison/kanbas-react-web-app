import db from "../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaCog, FaFilter } from "react-icons/fa";
import './grades.css';
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <h1>Grades</h1>
            <div className="import-export">
                <div className="d-flex float-end float-padding">
                    <div className="btn btn-light button-padding" style={{ height: 40, width: 100 }}>
                        <div className="d-flex" style={{ height: 35, width: 80 }}>
                            <FaFileImport className="me-2 mt-1" />
                            Import
                        </div>
                    </div>
                    <div className="dropdown button-padding" style={{ height: 40, width: 120 }}>

                        <a className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: 40, width: 120 }}>
                            <FaFileExport className=" mt-0 me-2" />
                            Export

                        </a>
                    </div>
                    <div className="btn btn-light button-padding" style={{ height: 40 }}><FaCog /></div>
                </div>
            </div>

            <div className="row">
                <div className="col ">
                    <label for="students" className="form-label search-labels ">Student Names</label>
                    <input type="text" id="students" className="form-control " placeholder="Search Students"></input>
                </div>
                <div className="col">
                    <label for="students" className="form-label search-labels ">Assignment Names</label>
                    <input type="text" id="assignments" className="form-control" placeholder="Search Assignments"></input>
                </div>
            </div>

            <div className="btn btn-light filters mb-4">
                <div className="d-flex">
                    <FaFilter />
                    Apply Filters</div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <td className="student-name py-2 ps-2">Student Name</td>
                            {assignments.map((assignment) => (<td className="table-header py-2 ">{assignment.title}</td>))}
                        </tr>

                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td className="text-danger">{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td className="center-items">{grade?.grade ||
                                            <div className="d-flex center-items">
                                                <input className="form-control form-control-sm input float-start" type="text" style={{width:100}}></input>
                                                <FaFileExport className=" mt-2 mx-2 file" />
                                            </div>
                                        }</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;