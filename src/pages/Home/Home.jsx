import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "./../Shared/Header/Header";

import LeftSideNav from "./../Shared/LeftsideNav/LeftSideNav";
import RightSideNav from "./../Shared/RightSideNav/RightSideNav";
import NewsCard from "../../components/NewsCard/NewsCard";

const Home = () => {
  const newsData = useLoaderData();

  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div>
          <LeftSideNav />
        </div>
        <div className=" col-span-2 ">
          <h2 className="text-lg font-semibold">Dragon News Home</h2>
          <div className="flex flex-col gap-10">
            {newsData?.map((singleNews) => (
              <NewsCard key={singleNews?.id} singleNews={singleNews} />
            ))}
          </div>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
