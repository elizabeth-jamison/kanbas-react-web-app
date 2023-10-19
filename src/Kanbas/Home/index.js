import ModuleList from "../Modules/ModuleList";
import { FaBars, FaGlasses, FaPlus, FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import './home.css';
import ModuleHeader from "../Modules/ModuleHeader";
function Home() {
    return (
        <div>
            <div className="col col-12 mt-3" style={{ height: 35 }}>
                <ModuleHeader />
            </div>
            <hr className=""/>
            <div className="row no-gutters">
                <div className="col col-12">
                    <ModuleList />
                </div>
            </div>
        </div>
    )
}
export default Home; 