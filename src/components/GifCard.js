import PropTypes from "prop-types";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifCardItem } from "./GifCardItem";

const GifCard = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{category}</h3>
      {loading ? (
        <p className="animate__animated animate__flash">Loading</p>
      ) : null}
      <div className="card-grid">
        {images.map((img) => {
          return <GifCardItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

GifCard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifCard;
