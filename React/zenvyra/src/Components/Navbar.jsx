function Navbar() {
  return (
    <div className="w-full p-6 bg-black text-white flex items-center justify-between">
      <div className="text-4xl font-bold">
        <h1 className="hero-title">Zenvyra</h1>
      </div>
      <div className="text-lg items-center">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-amber-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-200">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-200">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="space-x-4">
        <button className="btn-login">
          <span>Login</span>
        </button>

        <button className="btn-signup">
          <span>Get Started</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
