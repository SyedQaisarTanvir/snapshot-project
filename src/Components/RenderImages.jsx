import React from "react";
export default function FoodImages(props) {
  // const [images, setImage] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await Axios.get(
  //       "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=food&per_page=24&format=json&nojsoncallback=1"
  //     );
  //     console.log(response.data.photos.photo);
  //     setImage(response.data.photos.photo);
  //   };
  //   fetchData();
  // }, []);

  const { image, headingName } = props;

  return (
    <>
      <h1 className="image-name-heading">{headingName}</h1>

      <div className="image-container" key={image.id}>
        <div className="image">
          {image.map((img) => {
            const { server, secret, id, farm } = img;
            return (
              <img
                src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
                alt="Images From API"
              ></img>
            );
          })}
        </div>
      </div>
    </>
  );
}
