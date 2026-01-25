function Home() {
  return (
    <div className="flex-1 ml-73.75 h-screen bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat relative flex items-center select-none">
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/70"></div> */}

      {/* Content */}
      <div className="relative z-10 px-16 text-white max-w-2xl">
        <h1 className="text-7xl font-bold leading-tight">
          Bhavesh Bhoi
          {/* <span className="text-blue-500">Bhavesh Bhoi</span> */}
        </h1>

        <p className="mt-4 text-xl text-white/90">I'm a Frontend Developer</p>
      </div>
    </div>
  );
}

export default Home;
