import React from 'react';
import Layout from '@theme/Layout';

export default function Presentacion() {
  return (
    <Layout title="Presentación" description="Landing page de MonitorCenter">
      <iframe
        src="/landing.html"
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
