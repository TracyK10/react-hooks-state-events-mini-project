import React, { useState } from "react";
import TaskList from "./TaskList";

function CategoryFilter({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };
  // creating buttons and assigning className of selected to the button that is clicked
  const categoryButtons = categories.map((category, index) => (
    <button
      key={index}
      onClick={() => handleClick(category)}
      className={category === selectedCategory ? "selected" : ""}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
