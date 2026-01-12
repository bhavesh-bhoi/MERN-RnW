import React from "react";

function Navbar() {
  return (
    <div className="bg-black text-white p-4 max-w-sm h-screen items-center flex flex-col gap-8">
      <div className="h-48 w-48 rounded-full bg-gray-600/25 mt-5">
        <img
          className="rounded-full h-48 w-48 object-cover p-3"
          src="./assets/images/profile.avif"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Navbar;
