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
      label: 'Capacitación Vendedores',
      items: [
        'capacitacion-vendedores',
        {
          type: 'category',
          label: '1. Introducción',
          items: ['capacitacion-vendedores']
        },
        {
          type: 'category',
          label: '2. Producto',
          items: ['capacitacion-vendedores']
        },
        {
          type: 'category',
          label: '3. Protocolos',
          items: ['capacitacion-vendedores']
        },
        {
          type: 'category',
          label: '4. Público Objetivo',
          items: ['capacitacion-vendedores']
        },
        {
          type: 'category',
          label: '5. Objeciones Comunes',
          items: ['capacitacion-vendedores']
        },
        {
          type: 'doc',
          id: 'capacitacion-vendedores',
          label: '6. Alta de Cámaras'
        },
        {
          type: 'doc',
          id: 'capacitacion-vendedores',
          label: '7. Consideraciones Generales'
        }
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
