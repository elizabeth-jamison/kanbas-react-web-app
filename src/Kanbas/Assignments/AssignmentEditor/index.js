import React from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import db from "../../Database";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import './edit-assignment.css';
function AssignmentEditor() {
  const { pathname } = useLocation();
  console.log("location: " + pathname);
  const { courseId } = useParams();
  console.log("courseId: " + courseId);
  const { assignmentId } = useParams();
  console.log("assignmentId: " + assignmentId);
  const assignment = db.assignments.find( (assignment) => assignment._id === assignmentId);
  console.log("assignment: " + assignment);

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="">
      <div className="d-flex float-padding float-end mt-2" >
        <div className="btn btn-light button-padding " style={{ width: 120, height: 40 }}>
          <div className="d-flex">
          <FaCheckCircle className="publish-icon mt-1"/>
          <p className="publish mt-0"> Publish</p>
          </div>
        </div>
        <div className="btn btn-light button-padding "style={{ width: 40, height: 40 }} >
          <FaEllipsisV className="ellipsis"/>
        </div>
      </div>
      <div className="container ">
        <label className="assn-name" for="assignment-name">{assignment.title}</label>
        <input type="text" className="form-control" id="assignment-name" value={assignment.title} />

        <textarea className="form-control description" placeholder="This is the assignment description.">{assignment.description}</textarea>

        <label for="points">Points</label>
        <input type="text" className="form-control mb-3" id="points" placeholder="100" />

        <label for="group">Assignemnt Group</label>
        <select id="group" className="form-control mb-3">
          <option value="assignments">ASSIGNMENTS</option>
        </select>

        <label for="display">Display Grade as</label>
        <select id="display" className="form-control mb-3">
          <option value="percentage">Percentage</option>
        </select>

        <label for="type">Submission Type</label>
        <select id="type" className="form-control mb-3">
          <option value="online">Online</option>
        </select>

        <label for="entry-options">Online Entry Options</label>
        <ul id="entry-options" className="list-group mb-3">
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" id="text-entry" />
            <label className="form-check-label" for="text-entry">Text Entry</label>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" id="url" />
            <label className="form-check-label" for="url">Website URL</label>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" id="recording" />
            <label className="form-check-label" for="recording">Media Recordings</label>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" id="annotation" />
            <label className="form-check-label" for="annotation">Student Annotation</label>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" id="uploads" />
            <label className="form-check-label" for="uploads">File Uploads</label>
          </li>
        </ul>


        <label for="attemps">Submission Attemps</label>
        <select id="attemps" className="form-control mb-3">
          <option value="online">Unlimited</option>
        </select>

        <label for="plagiarism-review">Plagiarism Review</label>
        <select id="plagiarism-review" className="form-control mb-3">
          <option value="online">None</option>
        </select>

        <label for="group-assgn-label">Group Assignment</label>
        <ul id="group-assgn-label" className="list-group mb-3">
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" id="group-assgn" />
            <label className="form-check-label" for="group-assgn">This is a group Assignment</label>
          </li>
        </ul>

        <label for="peer-review-label">Peer Reviews</label>
        <ul id="peer-review-label" className="list-group mb-3">
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" id="peer-review" />
            <label className="form-check-label" for="peer-review">Require Peer Reviews</label>
          </li>
        </ul>

        <label for="assign" className="float-start me-3">Assign</label>
        <div id="assign" className="card assign-box py-3 px-3 mb-3">
          <label for="assign-to">Assign to</label>
          <input id="assign-to" className="form-control mb-3" type="text" placeholder="Everyone" name="assign-to" />
          <label for="due">Due</label>
          <input id="due" className="form-control mb-3" type="date" name="due-date" />
          <div className="row ">
            <div className="col">
              <label for="avail-from">Available from</label>
              <input id="avail-from" className="form-control  mb-3" type="date" name="available-from" />
            </div>
            <div className="col">
              <label for="avail-until">Available until</label>
              <input id="avail-until" className="form-control  mb-3" type="date" name="available-until" />
            </div>
          </div>



        </div>
      </div>
      <hr />
      <input type="checkbox" id="change" className="mx-2 " />
      <label for="change">Notify users that this content has changed</label>

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end mx-2 my-2">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-light float-end mx-2 my-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;