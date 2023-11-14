import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaEllipsisV, FaEdit, FaCheckCircle, FaGripVertical } from "react-icons/fa";
import {
  deleteAssignment,
  setAssignment,
  setAssignments
} from "./assignmentReducer";
import './assignments.css';
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
      );
  }, [courseId]);

  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };


  const assignments = useSelector((state) => state.assignmentReducer.assignments);
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  console.log("assignment: " + assignments);
  const dispatch = useDispatch();
  return (
    <div >
      <div className="row mt-4 mb-0" >
        <div className="col">
          <div className="input-group mt-1" style={{ width: 200 }}>
            <input type="text" className="form-control search" placeholder="Search for Assignments" />
          </div>
        </div>
        <div className="col">
          <div className="d-flex float-end ">
            <div className="btn btn-light button-padding " style={{ width: 100, height: 40 }}>
              <div className="d-flex">
                <div className="me-2"><FaPlus /></div>
                Group
              </div>
            </div>
            <Link to={`/Kanbas/Courses/${courseId}/CreateAssignment`}
              onClick={() => dispatch(setAssignment({ title: "New Assignment" }))}
              className="btn btn-danger button-padding " style={{ width: 135, height: 40 }}>
              <div className="d-flex">
                <div className="me-2"><FaPlus /></div>
                Assignment
              </div>
            </Link>
            <div className="btn btn-light button-padding " style={{ width: 40, height: 40 }}>
              <div className="d-flex">
                <div ><FaEllipsisV /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-0" />
      <ul className="list-group list-group-item-secondary module bg-light">
        <div className="module-heading" style={{ height: 50 }}>
          <div className="d-flex float-start">
            <div className="elipsis mt-2"><FaGripVertical /></div>
            <p className="module-element-title mt-2">Assignments </p>
          </div>
          <div className="elipsis float-end mt-2"><FaEllipsisV /></div>
          <div className="float-end plus-header mt-2"><FaPlus /></div>
          <p className="float-end percent mt-2"> 40% of Total</p>
        </div>
        {assignments.filter((assignment) => assignment.course === courseId).map((assignment, index) => (
          <div className="green-border">
            <li className="list-group-item bg-white" style={{ height: 75 }}>
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/AssignmentEditor/${assignment._id}`}
                onClick={() => dispatch(setAssignment(assignment))}
                className=" ">
                <div className="d-flex float-start">
                  <div className="elipsis mx-0"><FaGripVertical /></div>
                  <div className=" edit mx-2"><FaEdit /> </div>
                  <div>
                    <p className="assignment-name ms-1">{assignment.title}</p>
                    <p className="assignment-description ms-1">Assignment Description</p>
                    <p className="assignment-description ms-1">Assignment Date | Assignment Points </p>
                  </div>
                </div>
                <div className="elipsis float-end"><FaEllipsisV /></div>
                <div className="check float-end"><FaCheckCircle /></div>
                <div className="btn btn-secondary float-end mt-2 me-4"
                  onClick={(e) => {e.preventDefault(); handleDeleteAssignment(assignment._id)}}>Delete</div>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Assignments;