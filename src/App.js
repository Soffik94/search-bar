import PhotoGallery from "./components/PhotoGallery";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></SearchBar>{" "}
      <div className="gallery">
        <PhotoGallery inputValue={inputValue}></PhotoGallery>
      </div>
    </div>
  );
};

export default App;
s;
