import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Відкритий до змін та доповнень',
    description: (
      <>
        Проект повністю open source, тому ви можете додавати свої ідеї, ми будемо раді.
      </>
    ),
  },
  {
    title: 'Доступний будь-де',
    description: (
      <>
        В нас є сайт, мобільні додатки для offline роботи.
        Також в нас відкритий API який ви можете використовувати як вам хочеться.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
