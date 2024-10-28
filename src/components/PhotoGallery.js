import data from "../data";
import "./PhotoGallery.css";

const PhotoGallery = ({ inputValue }) => {
  const photos = data;

  const filteredPhotos = photos.filter((onePhoto) => {
    return onePhoto.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div>
      {filteredPhotos.map((onePhoto) => {
        const { id, image, title, description } = onePhoto;
        return (
          <div className="one-photo" key={id}>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGallery;
