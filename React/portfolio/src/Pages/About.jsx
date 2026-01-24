import { ChevronRight } from "lucide-react";

function About() {
  return (
    <div className="flex-1 ml-73.75 h-screen bg-black/95 select-none p-4">
      <div className="p-5">
        <h1 className="text-white font-bold text-3xl pt-10">About</h1>
        <hr className="bg-blue-300 w-22 pt-1 mt-1 rounded-full" />
        <p className="text-md text-white mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          tempore earum sit exercitationem ducimus eum, iusto at neque magnam a
          asperiores soluta ullam consequatur! Ipsum in praesentium
          exercitationem molestias sit.
        </p>
      </div>
      <div className="flex p-5 mt-5 gap-10">
        <div className="w-md h-90 aspect-4/3 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-sm"
            src="/assets/images/profile.avif"
            alt="Profile"
          />
        </div>
        <div className="w-full">
          <h1 className="text-white font-bold text-3xl">
            UI/UX Designer & Web Developer.
          </h1>
          <p className="text-white mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-5">
            <div>
              <p className="text-white font-semibold mb-2 flex items-center gap-2">
                <ChevronRight className="text-gray-400" /> Birth Date:{" "}
                <span className="text-gray-400">1 May 1995</span>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2 flex items-center gap-2">
                <ChevronRight className="text-gray-400" /> Age:{" "}
                <span className="text-gray-400">28</span>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2 flex items-center gap-2">
                <ChevronRight className="text-gray-400" /> Website:{" "}
                <span className="text-gray-400">www.portfolio.com</span>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2 flex items-center gap-2">
                <ChevronRight className="text-gray-400" /> Degree:{" "}
                <span className="text-gray-400">Master of Science</span>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2 flex items-center gap-2">
                <ChevronRight className="text-gray-400" /> Phone:{" "}
                <span className="text-gray-400">9867485637</span>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2 flex items-center gap-2">
                <ChevronRight className="text-gray-400" /> E-mail:{" "}
                <span className="text-gray-400">test@test.com</span>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2 flex items-center gap-2">
                <ChevronRight className="text-gray-400" /> City:{" "}
                <span className="text-gray-400">Bhopal, MP</span>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2 flex items-center gap-2">
                <ChevronRight className="text-gray-400" /> Freelance:{" "}
                <span className="text-gray-400">Available</span>
              </p>
            </div>
          </div>
          <p className="text-white mt-5">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
