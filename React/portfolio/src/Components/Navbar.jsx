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
      <div className="h-32 w-32 rounded-full bg-gray-600/35 mt-0">
        <img
          className="rounded-full h-32 w-32 object-cover p-2 select-none"
          draggable="false"
          src="/assets/images/my-profile-img.jpg"
          alt="Profile"
        />
      </div>

      <h1 className="text-2xl font-bold">Bhavesh Bhoi</h1>

      <div className="flex gap-2 text-2xl text-gray-400">
        <a
          href="https://www.linkedin.com/in/bhavesh-bhoi-701842250"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition duration-300 hover:bg-blue-300 rounded-full p-2"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Bhavu7"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition duration-300 hover:bg-blue-300 rounded-full p-2"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/bhaveshbhoi.web/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition duration-300 hover:bg-blue-300 rounded-full p-2"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition duration-300 hover:bg-blue-300 rounded-full p-2"
        >
          <FaDiscord />
        </a>
        <a
          href="https://x.com/BhaveshBhoi07"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition duration-300 hover:bg-blue-300 rounded-full p-2"
        >
          <FaTwitter />
        </a>
      </div>

      <div className="p-3 text-gray-400 w-full">
        <ul className="flex flex-col gap-8 text-lg font-small items-start">
          <li>
            <Link
              to="/"
              className="flex items-center gap-5 hover:text-blue-300 transition duration-300"
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center gap-5 hover:text-blue-300 transition duration-300"
            >
              <FaUser className="text-lg" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="flex items-center gap-5 hover:text-blue-300 transition duration-300"
            >
              <FaFileAlt className="text-lg" />
              <span>Resume</span>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="flex items-center gap-5 hover:text-blue-300 transition duration-300"
            >
              <FaServicestack className="text-lg" />
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dropdown"
              className="flex items-center gap-5 hover:text-blue-300 transition duration-300"
            >
              <FaServicestack className="text-lg" />
              <span>Dropdown</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center gap-5 hover:text-blue-300 transition duration-300"
            >
              <FaEnvelope className="text-lg" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
