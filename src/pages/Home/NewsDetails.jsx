import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

import { BsArrowLeft } from "react-icons/bs";

const NewsDetails = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  const news = newsData?.find((news) => news._id == id);
  const { image_url, title, details } = news || {};

  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-7 mt-5">
        <div className="col-span-3">
          <div className=" w-full bg-white border border-gray-200 rounded-lg shadow ">
            <a href="#">
              <img className="rounded-t-lg" src={image_url} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
                  {title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {details}
              </p>
              <Link
                to={"/"}
                className="inline-flex items-center px-3 gap-2 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <BsArrowLeft className="text-lg" /> All news in this category
              </Link>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
