import React, { useState, useEffect } from "react";
import "../styles/Breadcrumb.scss";
import { BreadcrumbList } from "./BreadcrumbList";
import { getCategoriesById } from "../services/categoriesServices.js";

export const BreadcrumbProduct = ({ categoryId }) => {
  const [categories, setCategories] = useState();

  async function categoriesById() {
    try {
      const api_response = await getCategoriesById(categoryId);
      const productCategories = api_response.data.categories.categories;
      setCategories(productCategories);
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  useEffect(() => {
    categoriesById();
  }, [categoryId]);     

  return (
    <section className="breadcrumb-product" itemType="https://schema.org/BreadcrumbList" aria-label="Breadcrumb del producto">
      {categories?.map((category, index) => {
        const isLastCategory = index === categories?.length - 1;
        return (
          <BreadcrumbList
            category={category.name}
            index={index}
            isLastCategory={isLastCategory}
            key={index + 1}
          />
        );
      })}
    </section>
  );
};
