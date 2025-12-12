import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ 
          color: '#1a3b5d',
          fontSize: '2rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '100%',
          margin: '0 0 0.75rem 0',
          padding: 0,
          lineHeight: 1.1,
          fontWeight: 700,
          letterSpacing: '-0.5px'
        }}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ color: '#2c5282' }}>{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{ display: 'flex', gap: '1rem' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.8rem 1.2rem'
            }}>
            Inicio
            <img 
              src="https://i.ibb.co/PZzhgth8/Monitor-Center-LOGO-1.png" 
              alt="Monitor Center Logo" 
              style={{ 
                height: '24px', 
                width: 'auto',
                borderRadius: '4px',
                verticalAlign: 'middle'
              }} 
            />
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/blog"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.8rem 1.2rem',
              border: '1px solid #1a3b5d',
              color: '#1a3b5d',
              transition: 'all 0.2s ease',
              backgroundColor: '#d0e2ff'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#b8d3ff';
              e.currentTarget.style.color = '#1a3b5d';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#d0e2ff';
              e.currentTarget.style.color = '#1a3b5d';
            }}>
            Blog 📚
          </Link>
        </div>
        {/* Imagen solo para móviles - Debajo de los botones */}
        <div className={styles.mobileOnly}>
          <img 
            src="https://i.ibb.co/0j7Xpf0X/Macbook-Air-demo-monitor-center-com.png" 
            alt="Vista previa de Monitor Center" 
            className={styles.mobileImage}
          />
        </div>
        
        {/* Imagen para escritorio */}
        <div className={styles.desktopOnly}>
          <img 
            src="https://monitor-center.com/wp-content/uploads/2025/11/monitor-center-captura-multivista.png" 
            alt="Monitor Center Captura Multivista" 
            className={styles.desktopImage}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
