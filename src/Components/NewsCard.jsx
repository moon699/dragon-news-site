import { FaRegStar, FaStar } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { HiOutlineBookmark } from "react-icons/hi";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className=" mx-auto my-4 bg-white shadow-lg rounded-2xl overflow-hidden">
      <div className="p-4">
        {/* Author Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={news?.author?.img}
              alt={news?.author?.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h4 className="font-semibold text-gray-800">{news?.author?.name}</h4>
              <p className="text-sm text-gray-500">{news?.author?.published_date}</p>
            </div>
          </div>
          <div className="flex space-x-2 text-gray-500">
            <HiOutlineBookmark className="w-5 h-5 cursor-pointer" />
            <FiShare2 className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          {news?.title}
        </h2>

        {/* Image */}
        <img
          src={news?.image_url}
          alt="News"
          className="w-full h-48 object-cover rounded-lg mb-3"
        />

        {/* Details */}
        <p className="text-sm text-gray-600 mb-3">
          {news?.details} <span className="text-red-500 cursor-pointer">Read More</span>
        </p>

        {/* Rating and Views */}
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              index < Math.floor(news?.rating?.number || 0) ? (
                <FaStar key={index} className="text-orange-400" />
              ) : (
                <FaRegStar key={index} className="text-orange-400" />
              )
            ))}
            <span className="ml-2 font-medium">{news?.rating?.number}</span>
            {news?.rating?.badge && (
              <span className="ml-2 text-sm text-green-600 bg-green-100 px-2 py-0.5 rounded">
                {news.rating.badge}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <AiOutlineEye className="w-5 h-5 mr-1" />
            <span>{news?.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;