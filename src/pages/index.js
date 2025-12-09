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
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
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
        </div>
        <div style={{ 
          marginTop: '2rem', 
          textAlign: 'center', 
          marginBottom: '0',
          flex: '1',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center'
        }}>
          <img 
            src="https://monitor-center.com/wp-content/uploads/2025/11/monitor-center-captura-multivista.png" 
            alt="Monitor Center Captura Multivista" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto',
              borderRadius: '0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              marginBottom: '0',
              display: 'block'
            }} 
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
