import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";

const CategoryList = ({ category }) => {
  return (
    <>
      <div key={category?.id} className="text-center">
        <NavLink to={`/category/${category?.id}`} className="text-red-400">
          <h2 className="text-gray-400 font-medium border-2">
            {category?.name}
          </h2>
        </NavLink>
      </div>
    </>
  );
};

CategoryList.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryList;
