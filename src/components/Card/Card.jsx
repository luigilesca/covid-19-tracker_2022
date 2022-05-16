import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames/bind';

function Card({
  notActive,
  isActive,
  title,
  cases,
  total,
  italyTitle,
  italyCases,
  todayCases,
  todayRecovered,
  todayDeaths,
  usaCases,
  ...props
}) {
  return (
    <div
      className={classNames(styles.card, isActive && styles.selected, notActive && styles.italy)}
      onClick={props.onClick}
    >
      <div className={styles.info}>
        <h2>{title}</h2>
        <h3>
          Total :{' '}
          <strong>
            {total} {italyCases} {usaCases}
          </strong>
        </h3>
        <h3>
          Today :{' '}
          <strong>
            {cases} {todayCases} {todayRecovered} {todayDeaths}
          </strong>
        </h3>
      </div>
    </div>
  );
}

export default Card;
