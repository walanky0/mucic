import { InputHTMLAttributes } from 'react';

import styles from './style.module.scss';

type Props = {
  label: string;
  error?: string;
};

const InputField = ({
  label,
  error,
  className = '',
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.label}>{label}</div>
      <div className={styles.inputWrapper}>
        <input className={styles.input} {...props} />
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default InputField;
