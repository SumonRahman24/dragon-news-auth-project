import { useEffect, useState } from "react";
import CategoryList from "../../../components/CategoryList/CategoryList";
import SportNewsCard from "../../../components/SportNewsCard/SportNewsCard";

const LeftSideNav = () => {
  const [categorires, setCategories] = useState([]);
  const [newsDatas, setNewsData] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  return (
    <div>
      <h2 className="font-semibold text-lg">All Category</h2>
      {categorires?.map((category) => (
        <CategoryList key={category?.id} category={category} />
      ))}
      {/* news data mapping */}
      {newsDatas?.map((news) => (
        <SportNewsCard key={news?.id} news={news} />
      ))}
    </div>
  );
};

export default LeftSideNav;
