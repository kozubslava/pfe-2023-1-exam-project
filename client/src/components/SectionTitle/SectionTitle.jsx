import React from 'react';
import styles from './SectionTitle.module.sass';

const SectionTitle = ({ title, titleType, tagline, description, descriptionColor,  style}) => {

  let titleClass = styles.h2

  switch (titleType) {
    case 'h1':
      titleClass = styles.h1;
      break;
    case 'h2':
      titleClass = styles.h2;
      break;
    case 'h3':
      titleClass = styles.h3;
      break;
    default:
      titleClass = styles.h2;
  }

  return (
    <div className={styles.container} style={style}>
        {tagline && <span className={styles.tagline}>{tagline}</span>}
        <h2 className={titleClass}>{title}</h2>
        {description && <p style={{color: descriptionColor ? descriptionColor : '#19184A' }} className={styles.description}>{description}</p>}
    </div>
  );
}


export default SectionTitle;