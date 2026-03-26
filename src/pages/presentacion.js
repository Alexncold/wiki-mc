import React from 'react';
import Layout from '@theme/Layout';

export default function Presentacion() {
  return (
    <Layout title="Presentación" description="Landing page de MonitorCenter" noFooter>
      <iframe
        src="/landing-app/"
        style={{
          width: '100%',
          height: 'calc(100vh - 60px)',
          border: 'none',
          display: 'block',
        }}
        title="Presentación MonitorCenter"
      />
    </Layout>
  );
}
