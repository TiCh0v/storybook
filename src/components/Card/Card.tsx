import { ReactElement } from 'react';
import { Badge } from './helpers/Bage/Badge.tsx';
import { formatPrice } from './helpers/Func/helpers.ts';
import { defined } from './helpers/Func/helpers.ts';
import styles from './Card.module.scss'


import { BadgeProps } from './helpers/Bage/Badge.tsx';
import { ReactNode } from 'react';

export type CardProps = {
  name: string;
  price?: number;
  badges?: BadgeProps[];
  children?: ReactNode;
  onClick?: () => void;
};

export function Card({ name, price, badges, children }: CardProps): ReactElement {
  return (
    <div className={styles.card} id="section-card">
      <span>{name}</span>
      {defined(price) && (
        <span className={styles.muted}>{price > 0 ? `${formatPrice(price)} ₽` : 'Бесплатный'}</span>
      )}
      {badges && badges.map(badge => <Badge {...badge} key={badge.content} />)}
      {children}
    </div>
  );
}
