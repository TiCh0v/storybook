import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
