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
      {/* Profile Picture Container */}
      <div className="h-48 w-48 rounded-full bg-gray-600/25 mt-5">
        <img
          className="rounded-full h-48 w-48 object-cover p-3 select-none"
          draggable="false"
          src="/assets/images/profile.avif"
          alt="Profile"
        />
      </div>
      {/* Profile Name */}
      <h1 className="text-2xl font-bold">Bhavesh Bhoi</h1>
      {/* Navigation Links */}
      <div className="p-3">
        <ul className="flex flex-col gap-6 text-lg font-small">
          <li>
            <a href="#home" className="flex items-center gap-5">
              <FaHome className="text-lg" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center gap-5">
              <FaUser className="text-lg" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="flex items-center gap-5">
              <FaFileAlt className="text-lg" />
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#services" className="flex items-center gap-5">
              <FaServicestack className="text-lg" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-5">
              <FaEnvelope className="text-lg" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-auto mb-5">
        <p className="text-sm text-gray-400">
          © 2026{" "}
          <a
            href="https://bhaveshbhoi.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            Bhavesh Bhoi
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Navbar;
