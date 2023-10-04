import moment from "moment/moment";
import logo from "../../../assets/logo.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 mt-5">
      <div>
        <img src={logo} alt="logo image" />
      </div>
      <p className="text-gray-500 text-lg">Journalism Without Fear or Favour</p>
      <p className="text-xl text-gray-500  ">
        <span className="text-black">{moment().format(" dddd")}</span>
        {moment().format(" MMMM DD, YYYY")}
      </p>

      <div className=" bg-gray-200 h-14 p-3 flex gap-5 w-full">
        <button className="btn btn-primary btn-sm rounded-none border-none bg-[#D72050]">
          Latest
        </button>
        <Marquee pauseOnHover={true} className="space-x-16 ">
          <h3 className="text-lg text-[#403F3F font-medium] hover:text-blue-400">
            <Link to={"/"}>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </Link>
          </h3>
          <h3 className="text-lg text-[#403F3F font-medium] hover:text-blue-400">
            <Link to={"/"}>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </Link>
          </h3>
          <h3 className="text-lg text-[#403F3F font-medium] hover:text-blue-400">
            <Link to={"/"}>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </Link>
          </h3>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
