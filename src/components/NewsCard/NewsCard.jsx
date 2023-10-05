import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { BsBookmark, BsShare } from "react-icons/bs";
import { GoEye } from "react-icons/go";

const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
  const { image_url, title, details, author, rating, total_view, _id } =
    singleNews || {};
  return (
    <div>
      <div className="w-full bg-white  rounded-xl shadow  dark:border-gray-700">
        <div className="flex justify-between bg-gray-200 items-center p-2 px-2">
          <div className=" flex items-center gap-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={author?.img} />
              </div>
            </div>
            <div>
              <h4 className="text-sm">{author?.name}</h4>
              <p className="text-sm">{author?.published_date}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <BsBookmark className="text-xl" />
            <BsShare className="text-xl" />
          </div>
        </div>
        <h5 className="mb-2 text-xl font-semibold tracking-tight px-2 text-gray-900 py-2">
          {title}
        </h5>
        <a href="#">
          <img className="rounded-t-lg" src={image_url} alt="" />
        </a>
        <div className="p-2">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {details.slice(0, 75)}...
          </p>
          <Link to={`/details/${_id}`} className="text-[#FF8C47] underline">
            Read More
          </Link>
        </div>
        <div className="flex justify-between px-2 py-2 border-t-2">
          <div className="flex gap-2">
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span>{rating?.number}</span>
          </div>
          <div className="flex items-center gap-1">
            <GoEye />
            <span className="text-sm"> {total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object.isRequired,
};

export default NewsCard;
