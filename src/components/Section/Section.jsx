import React from 'react';
import style from './Section.module.css';
import PropTypes from 'prop-types';;

const Section = ({ title, children }) => (
  <div className={style.container}>
    {title && <h2 className={style.title}>{title}</h2>}
      <div className={style.style_children}>{children}</div>
       
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
