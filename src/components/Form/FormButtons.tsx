// FormWithButtons.tsx
import React, { useState } from 'react';
import styles from './FormButtons.module.scss';

interface FormWithButtonsProps {
  buttonText: string;
  successMessage: string;
}

const FormWithButtons: React.FC<FormWithButtonsProps> = ({ buttonText, successMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.formContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите что-нибудь"
        className={styles.inputField}
      />
      <div className={styles.buttonGroup}>
        <button onClick={handleSubmit} className={styles.primaryButton}>
          {buttonText}
        </button>
        <button onClick={() => setInputValue('')} className={styles.secondaryButton}>
          Очистить
        </button>
      </div>
      {submitted && <div className={styles.successMessage}>{successMessage}</div>}
    </div>
  );
};

export default FormWithButtons;
