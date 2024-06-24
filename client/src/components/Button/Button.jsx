import React from 'react';
import styles from './Button.module.sass'
import { HiArrowLongRight } from "react-icons/hi2"

const Button = ({link, text, target='_self',icon=false}) => {
  return (
    <a className={styles.button} href={link} target={target}>
    {text}
    {icon && <span className={styles.iconWrapper}><HiArrowLongRight className={styles.icon}/></span>}
</a>
  );
}

export default Button;
