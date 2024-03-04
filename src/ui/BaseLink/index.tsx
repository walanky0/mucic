import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

import styles from './style.module.scss';

type Props = {
  className?: string;
  children?: ReactNode;
  target?: '_blank';
};

const BaseLink = ({ className, ...props }: Props & LinkProps) => {
  return <Link className={`${className} ${styles.content}`} {...props} />;
};

export default BaseLink;
