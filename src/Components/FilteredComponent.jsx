import React from "react";

import Axios from "axios";

export default function FilteredComponent(props) {
  const { setImages, setHeadings } = props;
  const fetchData = async (tag) => {
    const response = await Axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${tag}&per_page=24&format=json&nojsoncallback=1`
    );
    console.log(response.data.photos.photo);
    setImages(response.data.photos.photo);
    setHeadings(tag + " " + "Images");
  };

  return (
    <>
      <div className="button-container">
        <button
          type="submit"
          className="mountainButton"
          onClick={() => fetchData("mountain")}
        >
          Mountain
        </button>
        <button
          type="submit"
          className="mountainButton"
          onClick={() => fetchData("beaches")}
        >
          Beaches
        </button>
        <button
          type="submit"
          className="mountainButton"
          onClick={() => fetchData("birds")}
        >
          Birds
        </button>
        <button
          type="submit"
          className="mountainButton"
          onClick={() => fetchData("food")}
        >
          Food
        </button>
      </div>
    </>
  );
}
