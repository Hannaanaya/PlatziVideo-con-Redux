import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions/index.js';
import PropTypes from 'prop-types';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/delete-icon.jpg';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList, slug, source } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating,
      duration, isList, slug, source
    });
  }
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  }
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
         <Link to={`/player/${id}`}>
            <img 
            className="carousel-item__details--img" 
            src={playIcon} 
            alt="Play Icon" 
            />
          </Link>
          {!isList ? (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Reproducir"
              onClick={handleSetFavorite}
            />
          ) :
            (
              <img
                className="carousel-item__details--img"
                src={removeIcon}
                alt="Quitar de mi lista"
                onClick={() => handleDeleteFavorite(id)}
              />
            )
          }
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
=======
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
  <img className="carousel-item__img" src={cover} alt={title}  />
  <div className="carousel-item__details">
    <div>
      <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
      <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
    </div>
    <p className="carousel-item__details--title">{title}</p>
    <p className="carousel-item__details--subtitle">
      {`${year} ${contentRating} ${duration}`}
    </p>
  </div>
</div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
>>>>>>> 82bfbf6c70d2014d0e825c963086b2f91abf452b
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
<<<<<<< HEAD
  cover: PropTypes.string,
  deleteFavorite: PropTypes.func,
  setFavorite: PropTypes.func,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
=======
}

export default CarouselItem;
>>>>>>> 82bfbf6c70d2014d0e825c963086b2f91abf452b
