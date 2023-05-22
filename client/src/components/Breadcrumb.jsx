import React from "react";
import "../styles/Breadcrumb.scss";
import { BreadcrumbList } from "./BreadcrumbList";

export const Breadcrumb = ({ categories }) => {
  return (
    <div className="breadcrumb" itemType="https://schema.org/BreadcrumbList">
      {categories.map((category, index) => {
        const isLastCategory = index === categories.length - 1;
        return (
          <BreadcrumbList
            category={category}
            index={index}
            isLastCategory={isLastCategory}
            key={index + 1}
          />
        );
      })}
    </div>
  );
};
