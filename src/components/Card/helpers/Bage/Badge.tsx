import classes from './Badge.module.scss';
import classNames from 'classnames';

import { ReactElement } from 'react';




export type BadgeProps = {
    content: string;
    class: 'success' | 'danger' | 'warning' | 'primary' | 'secondary';
  };
  

export const Badge = (badge: BadgeProps): ReactElement => {
  return (
    <div className={classNames(classes.badge, classes[badge.class])}>
      {badge.content}
    </div>
  );
};
