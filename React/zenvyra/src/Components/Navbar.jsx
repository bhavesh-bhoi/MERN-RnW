function Navbar() {
  return (
    <nav className="w-full p-6 bg-black text-white flex items-center justify-between">
      {/* Logo */}
      <div className="cursor-pointer">
        <h1 className="logo-effect">Zenvyra</h1>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-4">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="btn-login">
          <span>Login</span>
        </button>

        <button className="btn-signup">
          <span>Get Started</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
