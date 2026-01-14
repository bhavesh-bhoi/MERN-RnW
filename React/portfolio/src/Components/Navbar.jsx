import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-black text-white p-4 max-w-2xs h-screen items-center flex flex-col gap-8 select-none">
      <div className="h-48 w-48 rounded-full bg-gray-600/25 mt-5">
        <img
          className="rounded-full h-48 w-48 object-cover p-3 select-none"
          draggable="false"
          src="/assets/images/profile.avif"
          alt="Profile"
        />
      </div>
      <h1 className="text-xl font-bold">John Doe</h1>
      <div className="p-3">
        <ul className="flex flex-col gap-4 text-lg font-small">
          <li>
            <a href="#home" className="flex items-center gap-3">
              <FaHome className="text-lg" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center gap-3">
              <FaUser className="text-lg" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="flex items-center gap-3">
              <FaFileAlt className="text-lg" />
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#services" className="flex items-center gap-3">
              <FaServicestack className="text-lg" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
