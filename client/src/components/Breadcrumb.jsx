import React from "react";
import "../styles/Breadcrumb.scss";
import { useNavigate } from "react-router-dom";

export const Breadcrumb = ({ categories }) => {
  const navigate = useNavigate();

  const handleCateogoryQuery = (e, category) => {
    navigate(`/search/${category}`);
  };


  return (
    <ol className="breadcrumb" itemType="https://schema.org/BreadcrumbList">
      {categories.map((category, index) => {
        const isLastCategory = index === categories.length - 1;
       { console.log(category)}
        <li onClick={(e) => handleCateogoryQuery(e, category)} key={index}>
          <span>{category}</span>
          {!isLastCategory && <span> > </span>}
        </li>;
      })}
    </ol>
  );
};
