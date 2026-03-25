import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

function HomepageHeader() {
  const mockupSrc = useBaseUrl('/img/mockup-hero.jpg');
  const mobileSrc = useBaseUrl('/img/mc-mobile.png');

  return (
    <header className={styles.heroBanner}>
      <div className={styles.dotGrid} />
      <div className="container">
        {/* Eyebrow — fuera del grid */}
        <div className={styles.heroEyebrow}>
          <div className={styles.line} />
          <span>Documentación &middot; Recursos &middot; Soporte</span>
        </div>

        {/* Grid: título+subtítulo+botones vs imagen — centrado entre sí */}
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleMonitor}>MONITOR</span><span className={styles.desktopBreak}><br/></span><span className={styles.titleCenter}>CENTER</span><br/>
              <span className={styles.accent}>WIKI</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Todo lo que necesitás para instalar, configurar y aprovechar
              al máximo la plataforma de videovigilancia en la nube.
            </p>

            <div className={styles.buttons}>
              <Link className={styles.btnPrimary} to="/docs/introduccion">
                Ver documentación
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link className={styles.btnOutline} to="/blog">
                Blog
              </Link>
            </div>
          </div>

          {/* Right — mockup */}
          <div className={styles.heroImageWrap}>
            <div className={styles.heroImageDots}>
              <span className={styles.dot1} />
              <span className={styles.dot2} />
              <span className={styles.dot3} />
            </div>
            <img
              src={mockupSrc}
              alt="MonitorCenter dashboard"
              className={styles.heroImage}
            />
          </div>
        </div>

        {/* Stats — fuera del grid, debajo */}
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>×16</span>
            <span className={styles.statLabel}>Velocidad</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>24/7</span>
            <span className={styles.statLabel}>Grabación</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>1 APP</span>
            <span className={styles.statLabel}>Sin instalar</span>
          </div>
        </div>

        {/* Mobile image */}
        <div className={styles.mobileOnly}>
          <img src={mobileSrc} alt="MonitorCenter mobile" className={styles.mobileImage} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentación oficial de MonitorCenter — plataforma de videovigilancia en la nube">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
