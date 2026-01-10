function Navbar() {
  return (
    <div className="w-full p-6 bg-black text-white flex items-center justify-between">
      <div className="text-4xl font-bold">
        <h1 className="font-pacifico">Zenvyra</h1>
      </div>
      <div className="text-lg items-center">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-amber-100">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-100">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-100">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-100">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-100">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="space-x-4">
        <button className="bg-amber-500 text-black px-4 py-2 rounded hover:bg-amber-600 hover:cursor-pointer">
          Login
        </button>
        <button className="bg-amber-500 text-black px-4 py-2 rounded hover:bg-amber-600 hover:cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;
