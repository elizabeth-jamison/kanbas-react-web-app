import React, { useState } from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import './edit-assignment.css';
import {
  addAssignment,
  setAssignment,
} from "../assignmentReducer";
import * as client from "../client";

function CreateAssignment() {
  const { pathname } = useLocation();
  const { courseId } = useParams();
  const { assignmentId } = useParams();
  const assignments = useSelector((state) => state.assignmentReducer.assignments);

  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const [title, setTitle] = useState("Assignment Name");
  const [description, setDescription] = useState("Assignment Description");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddAssignment= () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };
  const handleSave = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="">
      <div className="d-flex float-padding float-end mt-2" >
        <div className="btn btn-light button-padding " style={{ width: 120, height: 40 }}>
          <div className="d-flex">
            <FaCheckCircle className="publish-icon mt-1" />
            <p className="publish mt-0"> Publish</p>
          </div>
        </div>
        <div className="btn btn-light button-padding " style={{ width: 40, height: 40 }} >
          <FaEllipsisV className="ellipsis" />
        </div>
      </div>
      <div className="container ">
        <label className="assn-name" for="assignment-name">Assignment Name:</label>
        <input type="text" className="form-control" id="assignment-name" value={assignment.title}
          onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))} />

        <textarea className="form-control description" placeholder="This is the assignment description."
          onChange={(e) => setDescription(e.target.value)} >{description}</textarea>

        <label for="points">Points</label>
        <input type="text" className="form-control mb-3" id="points" placeholder="100" />



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
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
       onClick={handleAddAssignment}
        className="btn btn-light float-end mx-2 my-2">
        Save
      </Link>
    </div>
  );
}


export default CreateAssignment;