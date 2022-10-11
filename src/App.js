import user from "./user.jpg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineSetting, AiOutlineMail } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { useRef } from "react";

function App() {
  const ref = useRef(null);
  const handleClass = () => {
    ref.current.classList.toggle("active");
  };
  return (
    <div className="action">
      <div className="profile" onClick={handleClass}>
        <img src={user} alt="" />
      </div>
      <div ref={ref} className="menu">
        <h3>
          Someone Famous
          <br />
          <span>Website Designer</span>
        </h3>
        <ul>
          <li>
            <HiOutlineUserCircle className="icon" />
            <a href="#">My Profile</a>
          </li>
          <li>
            <FaRegEdit className="icon" />
            <a href="#">Edit Profile</a>
          </li>
          <li>
            <AiOutlineMail className="icon" />
            <a href="#">Inbox</a>
          </li>
          <li>
            <AiOutlineSetting className="icon" />
            <a href="#">Settings</a>
          </li>
          <li>
            <FiHelpCircle className="icon" />
            <a href="#">Help</a>
          </li>
          <li>
            <BiLogOut className="icon" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
