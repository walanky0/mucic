import { ButtonHTMLAttributes } from 'react';

import styles from './style.module.scss';

type Props = {
  theme?: 'main';
};

const Button = ({
  theme,
  className,
  children,
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={`${styles.button} ${theme} ${className}`} {...props}>
      <span className={styles.content}>{children}</span>
    </button>
  );
};

export default Button;
