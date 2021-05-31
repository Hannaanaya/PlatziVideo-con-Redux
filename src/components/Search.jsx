import React from 'react';
<<<<<<< HEAD
import classNames from 'classnames';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {

  const { isHome, searchVideo } = props;

  const inputStyle = classNames('input', {
      isHome
  });

  const handleInput = (event) => {
      searchVideo(event.target.value);       
  }

  return (
      <section className="main">
          <h2 className="main__title">¿Qué quieres ver hoy?</h2>

          <input 
              className={inputStyle} 
              type="text" 
              placeholder="Buscar..."
              onKeyUp={handleInput}
          />

      </section>
  )
};

const mapStateToProps = state => {
  return {
      searchResult: state.searchResult,
  }
}

const mapDispatchToProps = {
  searchVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
=======
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className="main">
    <h2 className="main__title">¿Qué quieres ver hoy?</h2>
    <input type="text" className="input" placeholder="Buscar..." />
  </section>
);

export default Search;
>>>>>>> 82bfbf6c70d2014d0e825c963086b2f91abf452b
