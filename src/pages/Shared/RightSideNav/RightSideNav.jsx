import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import qZonePic1 from "../../../assets/qZone1.png";
import qZonePic2 from "../../../assets/qZone2.png";
import qZonePic3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-lg mb-2 font-bold">Login With</h2>
        <button className="btn btn-outline text-blue-400 btn-sm  rounded-md w-full text-sm capitalize h-10 mb-2 flex-wrap flex md:flex-col lg:flex-row">
          <FcGoogle className="text-lg" /> Login with Google
        </button>
        <button className="btn btn-outline text-gray-600 btn-sm  rounded-md w-full text-sm capitalize h-10 flex-wrap flex md:flex-col lg:flex-row">
          <FaGithub className="text-lg" /> Login with Github
        </button>
      </div>

      <div className="space-y-[2px]">
        <h2 className="text-lg mb-2 font-semibold mt-5">Find Us On</h2>
        <div className="flex items-center gap-2 border-2  p-3 rounded-t-lg hover:cursor-pointer ">
          <FaFacebook className="text-xl" />
          <a href="#">Facebook</a>
        </div>
        <div className="flex items-center gap-2 border-2  p-3 hover:cursor-pointer ">
          <AiFillTwitterCircle className="text-2xl" />
          <a href="#">Twitter</a>
        </div>
        <div className="flex items-center gap-2 border-2  p-3 rounded-b-lg hover:cursor-pointer">
          <AiFillInstagram className="text-2xl" />
          <a href="#">Instagram</a>
        </div>
      </div>

      <div className="bg-gray-200 mt-5 rounded p-2">
        <h2 className="font-bold text-lg mb-4 ml-2">Q-Zone</h2>
        <img src={qZonePic1} alt="qZonePic" />
        <img src={qZonePic2} alt="qZonePic" />
        <img src={qZonePic3} alt="qZonePic" />
      </div>

      <div className="my-5 primary-gradient max-h-96 text-white text-center space-y-5 py-10">
        <h2 className="lg:text-4xl font-semibold">
          Create an Amazing Newspaper
        </h2>
        <p className="font-normal lg:px-8">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn bg-red-700 border-none text-white rounded-none capitalize font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
