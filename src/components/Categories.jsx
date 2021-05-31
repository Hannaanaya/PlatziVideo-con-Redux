import React from 'react';
import '../assets/styles/components/Categories.scss';

<<<<<<< HEAD
const Categories = (props) => {
  const { title, children } = props;
  return (
    <div className='categories'>
      <h3 className='categories__title'>{title}</h3>
      {children}
    </div>
  );
};
=======
const Categories = ({ children, title }) => (
  <div className="categories">
    <h3 className="categories__title">{title}</h3>
    {children}
  </div>
);
>>>>>>> 82bfbf6c70d2014d0e825c963086b2f91abf452b

export default Categories;