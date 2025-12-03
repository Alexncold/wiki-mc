import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Información',
    image: require('@site/static/img/information.png').default,
    description: (
      <>
        Encuentra toda la información relevante sobre nuestra plataforma en la nube
      </>
    ),
  },
  {
    title: 'Documentación Técnica',
    image: require('@site/static/img/toolbox.png').default,
    description: (
      <>
        Aprende cómo funciona MonitorCenter de manera técnica y detallada
      </>
    ),
  },
  {
    title: 'Desarrollo Comercial',
    image: require('@site/static/img/profit.png').default,
    description: (
      <>
        Sé parte de una alianza estratégica para crecer en conjunto
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img 
          src={image} 
          className={styles.featureImage} 
          alt={title} 
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
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
