import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '80b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '6d2'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'ff1'),
            routes: [
              {
                path: '/docs/introduction',
                component: ComponentCreator('/docs/introduction', '425'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/first-start',
                component: ComponentCreator('/docs/Introduction/first-start', '71c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/ssh-network-config',
                component: ComponentCreator('/docs/Introduction/ssh-network-config', 'e74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/web-interface',
                component: ComponentCreator('/docs/Introduction/web-interface', '3cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview',
                component: ComponentCreator('/docs/overview', '2b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ROS',
                component: ComponentCreator('/docs/ROS', '100'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ROS2/image',
                component: ComponentCreator('/docs/ROS2/image', 'fa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ROS2/nodes',
                component: ComponentCreator('/docs/ROS2/nodes', '8ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ROS2/services',
                component: ComponentCreator('/docs/ROS2/services', 'd85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ROS2/topics',
                component: ComponentCreator('/docs/ROS2/topics', 'c05'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
