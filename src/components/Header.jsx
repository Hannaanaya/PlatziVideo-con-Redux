import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/components/Header.scss';

const Header = props => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  }

  const headerClass = classNames('header', {
    isLogin, 
    isRegister,
  });

  return (
  <header className={headerClass}>
    <Link to="/">
      <img className="header__img" src={logo} alt="Platzi Video" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        {hasUser ?
          <img src={gravatar(user.email)} alt={user.email} /> :
          <img src={userIcon} alt="" />
        }
        <p>Perfil</p>
      </div>
      <ul>
        {hasUser ?
          <li><a href="/">{user.name}</a></li>
        : null
        }
        {hasUser ?
          <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
          :
          <li>
            <Link to="/login">
              Iniciar sesión
            </Link>
          </li>
        }
=======
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
>>>>>>> 82bfbf6c70d2014d0e825c963086b2f91abf452b
      </ul>
    </div>
  </header>
);
<<<<<<< HEAD
  }

const mapStateToProps = state => { //solicita datos al store(la base de datos)
  return {
    user: state.user
  };
};

const mapDispatchToProps = { //envía los datos
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
=======

export default Header;
>>>>>>> 82bfbf6c70d2014d0e825c963086b2f91abf452b
