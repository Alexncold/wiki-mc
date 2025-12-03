// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'introduccion',
    {
      type: 'category',
      label: 'Capacitación a Vendedores',
      items: [
        {
          type: 'category',
          label: '1. Introducción',
          items: [
            {
              type: 'doc',
              id: 'capacitacion-vendedores/bienvenida',
              label: '• Bienvenida',
            },
            {
              type: 'doc',
              id: 'capacitacion-vendedores/quienes-somos',
              label: '• Quienes somos',
            },
            {
              type: 'doc',
              id: 'capacitacion-vendedores/que-vendemos',
              label: '• Qué vendemos',
            },
          ],
        },
        {
          type: 'category',
          label: '2. Producto',
          items: [
            {
              type: 'doc',
              id: 'capacitacion-vendedores/explicacion-general',
              label: '• Explicación general',
            },
            {
              type: 'doc',
              id: 'capacitacion-vendedores/arquitectura-tecnica',
              label: '• Arquitectura técnica',
            },
            {
              type: 'doc',
              id: 'capacitacion-vendedores/caracteristicas-clave',
              label: '• Características clave',
            },
          ],
        },
        {
          type: 'category',
          label: '3. Protocolos',
          items: [
            {
              type: 'doc',
              id: 'capacitacion-vendedores/ftp',
              label: '• FTP',
            },
            {
              type: 'doc',
              id: 'capacitacion-vendedores/rtsp',
              label: '• RTSP',
            },
            {
              type: 'doc',
              id: 'capacitacion-vendedores/hibrido',
              label: '• Híbrido',
            },
          ],
        },
        {
          type: 'category',
          label: '4. Público de Venta Objetivo',
          items: [
            {
              type: 'doc',
              id: 'capacitacion-vendedores/negocios-pequenos',
              label: '• Negocios pequeños',
            },
            {
              type: 'doc',
              id: 'capacitacion-vendedores/comercios-medianos',
              label: '• Comercios medianos',
            },
            {
              type: 'doc',
              id: 'capacitacion-vendedores/empresas-grandes',
              label: '• Empresas grandes',
            },
            {
              type: 'doc',
              id: 'capacitacion-vendedores/hogares',
              label: '• Hogares',
            },
            {
              type: 'doc',
              id: 'capacitacion-vendedores/clientes-con-camaras',
              label: '• Clientes con cámaras',
            },
            {
              type: 'doc',
              id: 'capacitacion-vendedores/clientes-con-problemas-previos',
              label: '• Clientes con problemas previos',
            },
          ],
        },
        {
          type: 'doc',
          id: 'capacitacion-vendedores/objeciones-comunes',
          label: '5. Objeciones Comunes',
        },
        {
          type: 'doc',
          id: 'capacitacion-vendedores/alta-de-camaras',
          label: '6. Alta de cámaras',
        },
        {
          type: 'doc',
          id: 'capacitacion-vendedores/consideraciones-generales',
          label: '7. Consideraciones Generales',
        },
      ]
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
