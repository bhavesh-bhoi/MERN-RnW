import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaServicestack,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black text-white p-4 w-74 h-screen items-center fixed flex flex-col gap-5 left-0 top-0 select-none">
      {/* Profile Picture Container */}
      <div className="h-32 w-32 rounded-full bg-gray-600/25 mt-0">
        <img
          className="rounded-full h-32 w-32 object-cover p-2 select-none"
          draggable="false"
          src="/assets/images/profile.avif"
          alt="Profile"
        />
      </div>
      {/* Profile Name */}
      <h1 className="text-2xl font-bold">Bhavesh Bhoi</h1>
      {/* Social Media Links */}
      <div className="flex gap-2 text-2xl text-gray-400">
        <Link
          className="hover:text-white transition duration-300 hover:bg-blue-400 rounded-full p-2"
          to="https://www.linkedin.com/in/bhavesh-bhoi-701842250"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </Link>
        <Link
          className="hover:text-white transition duration-300 hover:bg-blue-400 rounded-full p-2"
          to="https://github.com/Bhavu7"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </Link>
        <Link
          className="hover:text-white transition duration-300 hover:bg-blue-400 rounded-full p-2"
          to="https://www.instagram.com/bhaveshbhoi.web/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </Link>
        <Link
          className="hover:text-white transition duration-300 hover:bg-blue-400 rounded-full p-2"
          to="https://discord.com/channels/@me"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord />
        </Link>
        <Link
          className="hover:text-white transition duration-300 hover:bg-blue-400 rounded-full p-2"
          to="https://x.com/BhaveshBhoi07"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="p-3 text-gray-400 w-full">
        <ul className="flex flex-col gap-8 text-lg font-small items-start">
          <li>
            <Link
              to="/"
              className="flex items-center gap-5 hover:text-blue-400 transition duration-300"
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center gap-5 hover:text-blue-400 transition duration-300"
            >
              <FaUser className="text-lg" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="flex items-center gap-5 hover:text-blue-400 transition duration-300"
            >
              <FaFileAlt className="text-lg" />
              <span>Resume</span>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="flex items-center gap-5 hover:text-blue-400 transition duration-300"
            >
              <FaServicestack className="text-lg" />
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dropdown"
              className="flex items-center gap-5 hover:text-blue-400 transition duration-300"
            >
              <FaServicestack className="text-lg" />
              <span>Dropdown</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center gap-5 hover:text-blue-400 transition duration-300"
            >
              <FaEnvelope className="text-lg" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="mt-auto mb-5">
        <p className="text-sm text-gray-400">
          © 2026{" "}
          <Link
            to="https://bhaveshbhoi.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            Bhavesh Bhoi
          </Link>
          . All rights reserved.
        </p>
      </div> */}
    </div>
  );
}

export default Navbar;
