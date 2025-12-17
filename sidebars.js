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
    'requerimientos-monitorcenter',
    'conectar-camaras-dahua-monitorcenter',
    'agregar-monitorcenter-android',
    'agregar-monitorcenter-ios',
    {
      type: 'category',
      label: 'Capacitación a Vendedores 🔒',
      link: {
        type: 'doc',
        id: 'capacitacion-vendedores',
      },
      items: [
        {
          type: 'category',
          label: '1. Introducción',
          items: [
            {
              type: 'link',
              label: '• Bienvenida',
              href: '/docs/capacitacion-vendedores#bienvenida',
            },
            {
              type: 'link',
              label: '• Quienes somos',
              href: '/docs/capacitacion-vendedores#quienes-somos',
            },
            {
              type: 'link',
              label: '• Qué vendemos',
              href: '/docs/capacitacion-vendedores#que-vendemos',
            },
          ],
        },
        {
          type: 'category',
          label: '2. Producto',
          items: [
            {
              type: 'link',
              label: '• Explicación general',
              href: '/docs/capacitacion-vendedores#explicacion-general',
            },
            {
              type: 'link',
              label: '• Arquitectura técnica',
              href: '/docs/capacitacion-vendedores#arquitectura-tecnica',
            },
            {
              type: 'link',
              label: '• Características clave',
              href: '/docs/capacitacion-vendedores#caracteristicas-clave',
            },
          ],
        },
        {
          type: 'category',
          label: '3. Protocolos',
          items: [
            {
              type: 'link',
              label: '• FTP',
              href: '/docs/capacitacion-vendedores#ftp',
            },
            {
              type: 'link',
              label: '• RTSP',
              href: '/docs/capacitacion-vendedores#rtsp',
            },
            {
              type: 'link',
              label: '• Híbrido',
              href: '/docs/capacitacion-vendedores#hibrido',
            },
          ],
        },
        {
          type: 'category',
          label: '4. Público de Venta Objetivo',
          items: [
            {
              type: 'link',
              label: '• Negocios pequeños',
              href: '/docs/capacitacion-vendedores#negocios-pequenos',
            },
            {
              type: 'link',
              label: '• Comercios medianos',
              href: '/docs/capacitacion-vendedores#comercios-medianos',
            },
            {
              type: 'link',
              label: '• Empresas grandes',
              href: '/docs/capacitacion-vendedores#empresas-grandes',
            },
            {
              type: 'link',
              label: '• Hogares',
              href: '/docs/capacitacion-vendedores#hogares',
            },
            {
              type: 'link',
              label: '• Clientes con cámaras',
              href: '/docs/capacitacion-vendedores#clientes-con-camaras',
            },
            {
              type: 'link',
              label: '• Clientes con problemas previos',
              href: '/docs/capacitacion-vendedores#clientes-con-problemas-previos',
            },
          ],
        },
        {
          type: 'link',
          label: '5. Objeciones Comunes',
          href: '/docs/capacitacion-vendedores#objeciones-comunes',
        },
        {
          type: 'link',
          label: '6. Alta de cámaras',
          href: '/docs/capacitacion-vendedores#alta-de-camaras',
        },
        {
          type: 'link',
          label: '7. Consideraciones Generales',
          href: '/docs/capacitacion-vendedores#consideraciones-generales',
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
