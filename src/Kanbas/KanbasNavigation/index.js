import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaClock,
   FaDesktop, FaArrowRight, FaQuestionCircle} from "react-icons/fa";
import './kanbas-nav.css'; 

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [<FaUserCircle />, <FaTachometerAlt />, <FaBook />, <FaCalendar />, <FaInbox />,
    <FaClock />, <FaDesktop />, <FaArrowRight />, <FaQuestionCircle />];
  const { pathname } = useLocation();
  return (
    <div className="nav-bar d-none d-md-block" style={{width:85}}>
      <img src="../images/logo.png" width="85px" height="85px"/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`nav-box ${(pathname.includes(link) && "active")}`}>
          <div className={`kn-icon ${pathname.includes(link) && "active"} ${index === 0 && "account"}`}>{icons[index]}</div>
          <div className={`kn-links ${pathname.includes(link) && "active"}`}>{link}</div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;