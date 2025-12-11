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
  // Create a slug from the title for the class name
  const cardClass = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={clsx('col col--4')}>
      <div className={`${styles.featureCard} feature-card-${cardClass}`}>
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

// Mobile signup component
function MobileSignup() {
  return (
    <div className={styles.mobileSignup}>
      <h2 style={{
        fontSize: '1.8rem',
        fontWeight: 600,
        color: '#1a5f8e',
        margin: '0 0 1.5rem 0',
        lineHeight: '1.2',
        textAlign: 'center'
      }}>Crea tu cuenta aquí</h2>
      <a 
        href="https://cloud.monitor-center.com/app/signup" 
        style={{
          display: 'inline-block',
          backgroundColor: '#e6f3ff',
          padding: '0.6rem 1.2rem',
          borderRadius: '50px',
          color: '#1a5f8e',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '0.85rem',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          boxSizing: 'border-box'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#cce7ff'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e6f3ff'}
      >
        https://cloud.monitor-center.com/app/signup <kbd>➡</kbd>
      </a>
      <img 
        src="https://monitor-center.com/wp-content/uploads/2025/12/MonitorCenter.png" 
        alt="Monitor Center Dashboard" 
        style={{
          width: '80%',
          maxWidth: '320px',
          height: 'auto',
          margin: '1.5rem auto',
          display: 'block',
          borderRadius: '8px'
        }}
      />
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <MobileSignup />
        <div className="row" style={{ marginTop: '3rem' }}>
          <div className={`col col--12 ${styles.desktopSignup}`}>
            <div className={styles.imageBlock}>
              <div className={`row ${styles.featuresRowWithDivider}`} style={{ height: '100%', margin: 0 }}>
                <div className={`col col--6 ${styles.desktopSignup}`} style={{ textAlign: 'center', padding: 0, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                <div className={`col col--6 ${styles.desktopSignup}`} style={{
                  backgroundColor: '#fff',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem'
                }}>
                  <div style={{
                    width: '100%',
                    maxWidth: '500px',
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
