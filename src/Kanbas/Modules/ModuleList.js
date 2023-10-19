import React from "react";
import { useParams } from "react-router-dom";
import db from "../Database";
import { FaEllipsisV, FaPlus, FaCheckCircle, FaGripVertical } from "react-icons/fa";
import './home.css';

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules.filter((module) => module.course === courseId);
    return (
        <div>
            {modules.map((module, index) => (
                <ul key={index} className="list-group list-group-item-secondary module bg-light" >
                    <div class="module-heading" style={{ height: 40 }}>
                        <div class="d-flex float-start">
                            <div className="ellipsis mt-1"><FaGripVertical /></div>
                            <p class="module-element-title">{module.name}</p>
                        </div>
                        <div className="float-end ellipsis mt-1"><FaEllipsisV /></div>
                        <div className="float-end plus-header mt-1"><FaPlus /></div>
                        <div className="float-end check mt-1"><FaCheckCircle /></div>
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

