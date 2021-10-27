import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifCard from "./components/GifCard";

const GiphyApp = () => {
  const [categories, setCategories] = useState(["One Punch Man"]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "Kangoku Gakuen"]);
  // setCategories(cat => [...categories, "Kangoku Gakuen"]);
  //   };

  return (
    <>
      <h2>GiphyApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => {
          return <GifCard key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GiphyApp;
