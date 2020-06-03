export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  /*{
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-default'
  },*/
  {
    path: '/admin/develop',
    title: 'Develop',
    type: 'sub',
    icontype: 'fas fa-file-code text-default',
    collapse: 'develop',
    isCollapsed: true,
    children: [
      { path: 'specs', title: 'Specs', type: 'link' },
      { path: 'proxies', title: 'API Proxies', type: 'link' },
      { path: 'flows', title: 'Shared Flows', type: 'link' },
      // { path: 'traces', title: 'Offline Trace', type: 'link' }
    ]
  },
  {
    path: '/admin/publish',
    title: 'Publish',
    type: 'sub',
    icontype: 'fas fa-upload text-default',
    collapse: 'publish',
    isCollapsed: true,
    children: [
      { path: 'products', title: 'API Products', type: 'link' },
      { path: 'portals', title: 'Portals', type: 'link' },
      { path: 'programs', title: 'Developer Programs', type: 'link' },
      { path: 'developers', title: 'Developers', type: 'link' },
      { path: 'apps', title: 'Apps', type: 'link' },
    ]
  },
  {
    path: '/admin/analyze',
    title: 'Analyze',
    type: 'sub',
    icontype: 'fas fa-chart-area text-default',
    collapse: 'analyze',
    isCollapsed: true,
    children: [
      { 
        path: 'metrics', 
        title: 'API Metrics', 
        type: 'sub',
        children: [
          { path: 'proxy', title: 'API Proxy Performance', type: 'link' },
          { path: 'cache', title: 'Cache Performance', type: 'link' },
          { path: 'error', title: 'Error Code Analysis', type: 'link' },
          { path: 'target', title: 'Target Performance', type: 'link' }
        ]
      },
      { 
        path: 'developers', 
        title: 'Developers', 
        type: 'sub',
        children: [
          { path: 'engagement', title: 'Developer Engagement', type: 'link' },
          { path: 'traffic', title: 'Traffic Composition', type: 'link' }
        ]
      },
      { 
        path: 'end-users', 
        title: 'End Users', 
        type: 'sub',
        children: [
          { path: 'devices', title: 'Devices', type: 'link' },
          { path: 'geomap', title: 'Geomap', type: 'link' }
        ]
      },
      { 
        path: 'custom', 
        title: 'Custom Reports', 
        type: 'sub',
        children: [
          { path: 'reports', title: 'Reports', type: 'link' }
        ]
      }
    ]
  },
  {
    path: '/admin/management',
    title: 'Admin',
    type: 'sub',
    icontype: 'fas fa-user-shield text-default',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Logs', type: 'link' },
      { 
        path: 'environments',
        title: 'Environments',
        type: 'sub',
        children: [
          { path: 'caches', title: 'Caches', type: 'link' },
          { path: 'flow-hooks', title: 'Flow Hooks', type: 'link' },
          { path: 'key-maps', title: 'Key Value Maps', type: 'link' },
          { path: 'references', title: 'References', type: 'link' },
          { path: 'target-servers', title: 'Target Servers', type: 'link' },
          { path: 'tls-keystores', title: 'TLS Keystores', type: 'link' }
        ]
      },
      // { path: 'roles', title: 'Roles', type: 'link' },
      { path: 'virtual-hosts', title: 'Virtual Hosts', type: 'link' },
      { path: 'users', title: 'Users', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-default'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/user/discovery',
    title: 'API Discovery',
    type: 'link',
    icontype: 'fas fa-compass text-warning'
  },
  {
    path: '/user/payment',
    title: 'Payment & Billing',
    type: 'link',
    icontype: 'fas fa-file-invoice-dollar text-warning'
  }
];


export const ROUTESORGANISATION: RouteInfo[] = [
  {
    path: '/organisation/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-green'
  },
  {
    path: '/organisation/discovery',
    title: 'API Discovery',
    type: 'sub',
    icontype: 'fas fa-compass text-green',
    isCollapsed: true,
    children: [
      { path: 'public', title: 'Public', type: 'link' },
      { path: 'private', title: 'Private', type: 'link' }
    ]
  },
  {
    path: '/organisation/payment',
    title: 'Payment & Billing',
    type: 'link',
    icontype: 'fas fa-file-invoice-dollar text-green'
  }
];