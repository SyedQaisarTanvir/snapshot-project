import React, { useState, useEffect } from "react";
import SeachComponent from "./Components/SearchComponent";
import Axios from "axios";
import "./App.css";
import FilteredComponent from "./Components/FilteredComponent";

import RenderImages from "./Components/RenderImages";

function App() {
  const [images, setImage] = useState([]);
  const [heading, setHeading] = useState("Mountain Images");
  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(
        "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=mountain&per_page=24&format=json&nojsoncallback=1"
      );
      setImage(response.data.photos.photo);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <SeachComponent setImages={setImage} setHeadings={setHeading} />
      <FilteredComponent setImages={setImage} setHeadings={setHeading} />
      <RenderImages image={images} headingName={heading} />
    </div>
  );
}

export default App;
