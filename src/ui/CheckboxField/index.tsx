import { InputHTMLAttributes } from 'react';

import styles from './style.module.scss';

type Props = {
  inputId: string;
};

const CheckboxField = ({
  className,
  inputId,
  children,
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label htmlFor={inputId} className={`${styles.wrapper} ${className}`}>
      <input id={inputId} type="checkbox" className={styles.input} {...props} />
      <span className={styles.content}>{children}</span>
    </label>
  );
};

export default CheckboxField;
