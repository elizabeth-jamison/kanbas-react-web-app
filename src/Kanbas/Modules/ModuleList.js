import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../Database";
import { FaEllipsisV, FaPlus, FaCheckCircle, FaGripVertical } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules
} from "./modulesReducer";
import './home.css';
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";
function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
        .then((modules) =>
            dispatch(setModules(modules))
        );
    }, [courseId]);
    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
        dispatch(addModule(module));
        dispatch(setModule({ name: "New Module", description: "New Description" }));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
        dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
        dispatch(setModule({ name: "New Module", description: "New Description" }));
      };

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <div className="mb-5">
            <ul className="list-group" >
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <input
                                            className="form-control"
                                            value={module.name}
                                            onChange={(e) =>
                                                dispatch(setModule({ ...module, name: e.target.value }))
                                            } />
                                    </div>
                                    <div className="row mt-1">
                                        <textarea
                                            className="form-control"
                                            value={module.description}
                                            onChange={(e) =>
                                                dispatch(setModule({ ...module, description: e.target.value }))
                                            } />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2" style={{width:175}}>
                            <div className="d-flex ">
                                <div className="btn btn-danger mx-1"
                                    onClick={handleAddModule}>
                                    Add
                                </div>
                                <div className="btn btn-secondary mx-1"
                                    onClick={handleUpdateModule}>
                                    Update
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            {modules.filter((module) => module.course === courseId).map((module, index) => (
                <ul key={index} className="list-group list-group-item-secondary module bg-light" >
                    <div class="module-heading" style={{ height: 40 }}>
                        <div class="d-flex float-start">
                            <div className="ellipsis mt-1"><FaGripVertical /></div>
                            <p class="module-element-title">{module.name}</p>
                        </div>
                        <div className="btn btn-secondary mx-1"
                            onClick={() => dispatch(setModule(module))}>
                            Edit
                        </div>
                        <div className="btn btn-secondary mx-1"
                            onClick={() => {handleDeleteModule(module._id)}}>
                            Delete
                        </div>
                        <div className="float-end ellipsis mt-1"><FaEllipsisV /></div>
                        <div className="float-end plus-header mt-1"><FaPlus /></div>
                        <div className="float-end check mt-1"><FaCheckCircle /></div>
                    </div>

                    <div className="green-border">
                        <li key={index} className="list-group-item  bg-white" style={{ height: 60 }}>
                            <div className="mt-2">{module.description}</div>
                        </li>
                    </div>

                    {module.lessons && module.lessons.length > 0 && (
                        <div className="">
                            {module.lessons.map((lesson, index) => (
                                <div className="green-border">
                                    <li key={index} className="list-group-item  bg-white" style={{ height: 60 }}>

                                        <div class="d-flex float-start">
                                            <div className="ellipsis mt-1"><FaGripVertical /></div>
                                            <p class="module-element-name ">{lesson.name}</p>
                                        </div>
                                        <div className="float-end ellipsis mt-1"><FaEllipsisV /></div>
                                        <div className="float-end check mt-1"><FaCheckCircle /></div>
                                    </li>
                                </div>
                            ))}
                        </div>
                    )}
                </ul>
            ))}
        </div>
    );
}
export default ModuleList;

