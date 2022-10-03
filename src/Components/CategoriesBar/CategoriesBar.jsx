import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action";
import "./_categoriesBar.scss";
const keywords = [
  "All",
  "React Js",
  "Angular Js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Qehbeler",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];
const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All')
  const dispatch = useDispatch()
  const handleClick = value => {
    if(value === 'All'){
      dispatch(getPopularVideos)
    }else{
      dispatch(getVideosByCategory(value))
    }
    setActiveElement(value)
    dispatch(getVideosByCategory(value))
  }
  return (
    <div className="CategoriesBar">
      {keywords.map((value, i) => (
        <span className={activeElement === value?"active" : ''} onClick={() => handleClick(value)} key={i}>{value}</span>
      ))}
    </div>
  );
};

export default CategoriesBar;
