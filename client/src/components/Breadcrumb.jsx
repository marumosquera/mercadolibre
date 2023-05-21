import React from "react";
import "../styles/Breadcrumb.scss";

export const Breadcrumb = ({ categories }) => {
  return (
    <div className="breadcrumb">
      {categories.map((category) => {
        return <span> {category} </span>;
      })}
    </div>
  );
};
