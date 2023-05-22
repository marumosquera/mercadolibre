import React from "react";
import { useNavigate } from "react-router-dom";
import {SlArrowRight} from "react-icons/sl";

export const BreadcrumbList = ({ category, index, isLastCategory }) => {
  const navigate = useNavigate();

  const handleCateogoryQuery = (e, category) => {
    navigate(`/search/${category}`);
  };

  return (
    <li key={index}>
      <span onClick={(e)=>handleCateogoryQuery(e,category)}>{category}</span>
      {!isLastCategory && <span> <SlArrowRight/> </span>}
    </li>
  );
};
