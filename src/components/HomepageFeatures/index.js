import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Información',
    description: 'Encontrá toda la información relevante sobre nuestra plataforma en la nube: planes, funcionalidades y casos de uso.',
    link: '/docs/introduccion',
    linkLabel: 'Ver introducción',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Documentación Técnica',
    description: 'Guías de instalación, configuración de cámaras, integración con DVR/NVR y compatibilidad de dispositivos.',
    link: '/docs/requerimientos-monitorcenter',
    linkLabel: 'Ver requerimientos',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Desarrollo Comercial',
    description: 'Sé parte de una alianza estratégica. Recursos para revendedores, integradores y socios tecnológicos.',
    link: '/partnership',
    linkLabel: 'Ver partnership',
  },
];

function FeatureCard({ icon, title, description, link, linkLabel }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardDesc}>{description}</p>
      <Link className={styles.cardLink} to={link}>
        {linkLabel}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </div>
  );
}

function CTABanner() {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaGlow} />
      <div className={styles.ctaContent}>
        <div className={styles.ctaLeft}>
          <span className={styles.ctaEyebrow}>Plataforma lista</span>
          <h2 className={styles.ctaTitle}>Nada queda sin verse.</h2>
          <p className={styles.ctaDesc}>
            Accedé a tu cuenta desde cualquier dispositivo, sin instalar nada.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a
            href="https://cloud.monitor-center.com/app/signup"
            className={styles.ctaBtnPrimary}
          >
            Crear cuenta gratis
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <Link to="/docs/demo" className={styles.ctaBtnOutline}>
            Ver demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.sectionEyebrow}>¿Por dónde empezar?</span>
          <h2 className={styles.sectionTitle}>Todo en un solo lugar</h2>
          <p className={styles.sectionSub}>
            Desde la configuración inicial hasta recursos avanzados para socios comerciales.
          </p>
        </div>
        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
        <CTABanner />
      </div>
    </section>
  );
}
