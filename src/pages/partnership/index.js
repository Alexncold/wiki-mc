import React from 'react';
import Layout from '@theme/Layout';
import styles from './partnership.module.css';

export default function Partnership() {
  return (
    <Layout title="Partnership MonitorCenter + Dahua" description="Alianza estratégica entre MonitorCenter y Dahua para soluciones de videovigilancia en la nube">
      <main className={styles.partnership}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>Partnership MonitorCenter + Dahua</h1>
          </div>
          
          <section className={styles.section}>
            <p>MonitorCenter ofrece un servicio de almacenamiento en la nube para cámaras de seguridad, diseñado para integrarse de forma simple y confiable con las principales marcas del mercado. Uno de nuestros partners tecnológicos estratégicos es Dahua, líder global en soluciones de videoseguridad.</p>
          </section>

          <section className={styles.section}>
            <h2>Integración mediante protocolo P2P de Dahua</h2>
            <p>El sistema P2P de Dahua permite enlazar cámaras y DVRs de forma directa con nuestra plataforma, sin necesidad de configuraciones complejas como apertura de puertos o redes avanzadas.</p>
            <p>Gracias a este protocolo, los dispositivos Dahua pueden conectarse a MonitorCenter de manera rápida y estable, utilizando la infraestructura de Dahua como intermediaria para establecer la comunicación.</p>
          </section>

          <section className={styles.section}>
            <h2>Qué es el P2P de Dahua y cómo funciona</h2>
            <p>El protocolo P2P de Dahua actúa como un puente seguro entre el dispositivo y la nube de MonitorCenter:</p>
            <ul>
              <li>La cámara o DVR Dahua se registra en el ecosistema P2P del fabricante.</li>
              <li>MonitorCenter se conecta a ese dispositivo a través del servicio P2P.</li>
              <li>El cliente puede comenzar a grabar y visualizar sin configuraciones técnicas complejas.</li>
            </ul>
            <p>Este enfoque prioriza la facilidad de uso y reduce significativamente el tiempo de implementación.</p>
            <div className={styles.imageContainer}>
              <img 
                src="https://material.dahuasecurity.com/uploads/image/20240219/HowItWorks-image.jpeg" 
                alt="Cómo funciona la integración Dahua"
                className={styles.dahuaImage}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2>Partnership tecnológico con Dahua</h2>
            <p>MonitorCenter mantiene un partnership tecnológico con Dahua, lo que nos permite trabajar con una integración profunda y validada de sus dispositivos y servicios.</p>
            <p>Esta colaboración nos brinda:</p>
            <ul>
              <li>Compatibilidad total con cámaras y DVRs Dahua.</li>
              <li>Conexiones estables y optimizadas.</li>
              <li>Acceso a tecnología actualizada del fabricante.</li>
              <li>Mejor experiencia de usuario final.</li>
            </ul>
            <p>Al ser partners, podemos garantizar que las soluciones Dahua funcionan de forma óptima dentro del ecosistema MonitorCenter.</p>
          </section>

          <section className={styles.section}>
            <h2>Beneficios para el cliente final</h2>
            <p>Gracias a esta alianza, los clientes obtienen:</p>
            <ul>
              <li>Integración rápida de cámaras Dahua existentes.</li>
              <li>Grabaciones seguras en la nube.</li>
              <li>Acceso remoto desde cualquier dispositivo.</li>
              <li>Menor complejidad técnica.</li>
              <li>Soporte especializado.</li>
            </ul>
            <p>El resultado es una solución de videoseguridad moderna, confiable y lista para escalar.</p>
          </section>

          <section className={styles.section}>
            <h2>Beneficios para vendedores e integradores</h2>
            <p>Para vendedores e instaladores, la integración con Dahua representa:</p>
            <ul>
              <li>Menor tiempo de puesta en marcha.</li>
              <li>Menos incidencias técnicas en la instalación.</li>
              <li>Una propuesta de valor clara y fácil de explicar.</li>
              <li>Posibilidad de ofrecer servicios en la nube sobre hardware ya instalado.</li>
            </ul>
            <p>Esto convierte a MonitorCenter + Dahua en una combinación ideal para proyectos nuevos o existentes.</p>
          </section>

          <section className={styles.section}>
            <h2>Alianza estratégica</h2>
            <p>La alianza entre MonitorCenter y Dahua une hardware de primer nivel con un sistema de almacenamiento en la nube robusto y escalable. Esta integración permite ofrecer soluciones de videoseguridad eficientes, simples de implementar y orientadas a las necesidades reales del mercado.</p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
