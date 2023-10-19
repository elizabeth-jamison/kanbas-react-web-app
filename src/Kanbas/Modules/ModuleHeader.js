import './modules.css';
import {FaPlus, FaEllipsisV, FaCheckCircle } from "react-icons/fa";
function ModuleHeader(){
    return (
        <div className="col-12 mt-3 " style={{ height: 40 }}>
        <div className="d-flex float-end float-padding" style={{ height: 40 }}>
            <div className="btn btn-light button-padding" style={{ height: 40 }}>Collapse All</div>
            <div className="btn btn-light button-padding" style={{ height: 40 }}>View Progress</div>
            <div className="dropdown button-padding" style={{ height: 40 }}>
                <a className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: 40 }}>
                    <FaCheckCircle className="check-icon mt-0 me-2"/>
                    Publish All
                </a>

            </div>
            <div className="btn btn-danger button-padding" style={{ height: 40 }}>
                <FaPlus />
                Module
            </div>
            <div className="btn btn-light button-padding" style={{ height: 40 }}>
                <FaEllipsisV />
            </div>
        </div>
    </div>
    );
}
export default ModuleHeader;