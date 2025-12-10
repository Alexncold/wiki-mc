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
      <div className={styles.featureCard}>
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
        <div className="row" style={{ marginTop: '3rem' }}>
          <div className="col col--12">
            <div className={styles.imageBlock}>
              <div className="row" style={{ height: '100%', margin: 0 }}>
                <div className="col col--6" style={{ textAlign: 'center', padding: 0, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src="https://monitor-center.com/wp-content/uploads/2025/12/MonitorCenter.png" 
                    alt="Monitor Center Dashboard" 
                    className={styles.fullWidthImage}
                    style={{
                      maxWidth: '60%',
                      height: 'auto',
                      marginTop: '0',
                      alignSelf: 'flex-start',
                      paddingTop: '0'
                    }}
                  />
                </div>
                <div className="col col--6" style={{
                  position: 'relative',
                  minHeight: '300px',
                  backgroundColor: '#fff',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    maxWidth: '500px',
                    padding: '0 2rem',
                    textAlign: 'center'
                  }}>
                    <h2 style={{
                      fontSize: '2.2rem',
                      fontWeight: 600,
                      color: '#1a5f8e',
                      margin: '0 0 1.5rem 0',
                      lineHeight: '1.2'
                    }}>Crea tu cuenta aquí</h2>
                    <a 
                      href="https://cloud.monitor-center.com/app/signup" 
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#e6f3ff',
                        padding: '0.8rem 2rem',
                        borderRadius: '50px',
                        color: '#1a5f8e',
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '1.1rem',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#cce7ff'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e6f3ff'}
                    >
                      https://cloud.monitor-center.com/app/signup <kbd>➡</kbd>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
