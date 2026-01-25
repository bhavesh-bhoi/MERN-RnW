import {
  ChevronRight,
  Smile,
  FolderKanban,
  Headset,
  UsersRound,
} from "lucide-react";

function About() {
  return (
    <div className="flex-1 ml-[296px] h-screen overflow-y-auto overflow-x-hidden bg-black/95 select-none p-4">
      <div className="p-5">
        <h1 className="text-white font-bold text-3xl pt-5">About</h1>
        <hr className="bg-blue-300 w-22 pt-1 mt-1 rounded-full" />
        <p className="text-md text-white mt-5">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="flex p-5 mt-5 gap-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-md h-90 aspect-4/3 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-sm"
              src="/assets/images/my-profile-img.jpg"
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
                  <ChevronRight className="text-blue-300 font-light" /> Birth
                  Date: <span className="text-gray-400">1 May 1995</span>
                </p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <ChevronRight className="text-blue-300 font-light" /> Age:{" "}
                  <span className="text-gray-400">28</span>
                </p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <ChevronRight className="text-blue-300 font-light" /> Website:{" "}
                  <span className="text-gray-400">www.portfolio.com</span>
                </p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <ChevronRight className="text-blue-300 font-light" /> Degree:{" "}
                  <span className="text-gray-400">Master of Science</span>
                </p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <ChevronRight className="text-blue-300 font-light" /> Phone:{" "}
                  <span className="text-gray-400">9867485637</span>
                </p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <ChevronRight className="text-blue-300 font-light" /> E-mail:{" "}
                  <span className="text-gray-400">test@test.com</span>
                </p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <ChevronRight className="text-blue-300 font-light" /> City:{" "}
                  <span className="text-gray-400">Bhopal, MP</span>
                </p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2 flex items-center gap-2">
                  <ChevronRight className="text-blue-300 font-light" />{" "}
                  Freelance: <span className="text-gray-400">Available</span>
                </p>
              </div>
            </div>
            <p className="text-white mt-5">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-5 mt-5">
        <div className="flex p-5 items-start">
          <Smile size={60} className="text-blue-300" />
          <div className="text-white ml-4">
            <h1 className="font-bold text-4xl mb-2">232+</h1>
            <p>
              Happy Clients{" "}
              <span className="text-gray-500">consequuntur quae</span>
            </p>
          </div>
        </div>
        <div className="flex p-5 items-start">
          <FolderKanban size={60} className="text-blue-300" />
          <div className="text-white ml-4">
            <h1 className="font-bold text-4xl mb-2">521+</h1>
            <p>
              Projects{" "}
              <span className="text-gray-500">adipisci atque cum quia aut</span>
            </p>
          </div>
        </div>
        <div className="flex p-5 items-start">
          <Headset size={60} className="text-blue-300" />
          <div className="text-white ml-4">
            <h1 className="font-bold text-4xl mb-2">1453+</h1>
            <p>
              Hours Of Support{" "}
              <span className="text-gray-500">aut commodi quaerat</span>
            </p>
          </div>
        </div>
        <div className="flex p-5 items-start">
          <UsersRound size={60} className="text-blue-300" />
          <div className="text-white ml-4">
            <h1 className="font-bold text-4xl mb-2">32+</h1>
            <p>
              Hard Workers{" "}
              <span className="text-gray-500">rerum asperiores dolor</span>
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 mt-10 mb-10">
        <h1 className="text-white font-bold text-3xl pt-5">Skills</h1>
        <hr className="bg-blue-300 w-22 pt-1 mt-1 rounded-full" />
        <p className="text-md text-white mt-5">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 pl-0">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-white font-semibold">HTML</h1>
              <span className="text-gray-400 font-normal">100%</span>
            </div>

            <div className="w-full bg-gray-700 h-2.5">
              <div className="bg-blue-300 h-2.5 w-[100%]"></div>
            </div>
          </div>
          <div className="p-2 pl-0">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-white font-semibold">PHP</h1>
              <span className="text-gray-400 font-normal">80%</span>
            </div>

            <div className="w-full bg-gray-700 h-2.5">
              <div className="bg-blue-300 h-2.5 w-[80%]"></div>
            </div>
          </div>
          <div className="p-2 pl-0">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-white font-semibold">CSS</h1>
              <span className="text-gray-400 font-normal">90%</span>
            </div>

            <div className="w-full bg-gray-700 h-2.5">
              <div className="bg-blue-300 h-2.5 w-[90%]"></div>
            </div>
          </div>
          <div className="p-2 pl-0">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-white font-semibold">WordPress/CMS</h1>
              <span className="text-gray-400 font-normal">90%</span>
            </div>

            <div className="w-full bg-gray-700 h-2.5">
              <div className="bg-blue-300 h-2.5 w-[90%]"></div>
            </div>
          </div>
          <div className="p-2 pl-0">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-white font-semibold">JavaScript</h1>
              <span className="text-gray-400 font-normal">75%</span>
            </div>

            <div className="w-full bg-gray-700 h-2.5">
              <div className="bg-blue-300 h-2.5 w-[75%]"></div>
            </div>
          </div>
          <div className="p-2 pl-0">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-white font-semibold">Photoshop</h1>
              <span className="text-gray-400 font-normal">55%</span>
            </div>

            <div className="w-full bg-gray-700 h-2.5">
              <div className="bg-blue-300 h-2.5 w-[55%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
