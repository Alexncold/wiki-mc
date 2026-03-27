import React from 'react';
import Layout from '@theme/Layout';

export default function Integradores() {
  return (
    <Layout title="Integradores" description="Programa de integradores MonitorCenter" noFooter>
      <iframe
        src="/integradores-app/"
        style={{
          width: '100%',
          height: 'calc(100vh - 60px)',
          border: 'none',
          display: 'block',
        }}
        title="Programa Integradores MonitorCenter"
      />
    </Layout>
  );
}
