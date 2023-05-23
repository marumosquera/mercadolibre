import React from "react";
import "../styles/Breadcrumb.scss";
import { BreadcrumbList } from "./BreadcrumbList";

export const BreadcrumbSearch = ({ categories }) => {
  return (
    <section className="breadcrumb" itemType="https://schema.org/BreadcrumbList" aria-label="Breadcrumb de la busqueda">
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
    </section>
  );
};
