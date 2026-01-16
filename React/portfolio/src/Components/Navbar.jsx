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

function Navbar() {
  return (
    <div className="bg-black text-white p-4 min-w-auto h-screen items-center fixed flex flex-col gap-8 left-0 top-0 select-none">
      {/* Profile Picture Container */}
      <div className="h-48 w-48 rounded-full bg-gray-600/25 mt-4">
        <img
          className="rounded-full h-48 w-48 object-cover p-3 select-none"
          draggable="false"
          src="/assets/images/profile.avif"
          alt="Profile"
        />
      </div>
      {/* Profile Name */}
      <h1 className="text-2xl font-bold">Bhavesh Bhoi</h1>
      {/* Social Media Links */}
      <div className="flex gap-4 text-2xl text-gray-400">
        <a
          className="hover:text-white transition duration-300 hover:bg-blue-400 rounded-full p-2"
          href="https://www.linkedin.com/in/bhavesh-bhoi-701842250"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="hover:text-white transition duration-300 hover:bg-blue-400 rounded-full p-2"
          href="https://github.com/Bhavu7"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="hover:text-white transition duration-300 hover:bg-blue-400 rounded-full p-2"
          href="https://www.instagram.com/bhaveshbhoi.web/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="hover:text-white transition duration-300 hover:bg-blue-400 rounded-full p-2"
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord />
        </a>
        <a
          className="hover:text-white transition duration-300 hover:bg-blue-400 rounded-full p-2"
          href="https://x.com/BhaveshBhoi07"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      {/* Navigation Links */}
      <div className="p-3 text-gray-400">
        <ul className="flex flex-col gap-6 text-lg font-small">
          <li>
            <a
              href="#home"
              className="flex items-center gap-5 hover:text-blue-400 transition duration-300"
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex items-center gap-5 hover:text-blue-400 transition duration-300"
            >
              <FaUser className="text-lg" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="flex items-center gap-5 hover:text-blue-400 transition duration-300"
            >
              <FaFileAlt className="text-lg" />
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="flex items-center gap-5 hover:text-blue-400 transition duration-300"
            >
              <FaServicestack className="text-lg" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center gap-5 hover:text-blue-400 transition duration-300"
            >
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
