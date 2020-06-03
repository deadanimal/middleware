import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { ServicesComponent } from './services/services.component';
import { DataModelComponent } from './data-model/data-model.component';
import { DevelopSpecsComponent } from './develop-specs/develop-specs.component';
import { DevelopProxiesComponent } from './develop-proxies/develop-proxies.component';
import { DevelopFlowsComponent } from './develop-flows/develop-flows.component';
import { DevelopTracesComponent } from './develop-traces/develop-traces.component';
import { DevelopProxiesCreateComponent } from './develop-proxies-create/develop-proxies-create.component';
import { PublishProductsComponent } from './publish-products/publish-products.component';
import { PublishPortalsComponent } from './publish-portals/publish-portals.component';
import { PublishDevelopersComponent } from './publish-developers/publish-developers.component';
import { PublishAppsComponent } from './publish-apps/publish-apps.component';
import { PublishProgramsComponent } from './publish-programs/publish-programs.component';
import { PublishProductsAddComponent } from './publish-products-add/publish-products-add.component';
import { PublishAppsAddComponent } from './publish-apps-add/publish-apps-add.component';
import { AnalyzeProxyPerformanceComponent } from './analyze-proxy-performance/analyze-proxy-performance.component';
import { AnalyzeCachePerformanceComponent } from './analyze-cache-performance/analyze-cache-performance.component';
import { AnalyzeErrorPerformanceComponent } from './analyze-error-performance/analyze-error-performance.component';
import { AnalyzeTargetPerformanceComponent } from './analyze-target-performance/analyze-target-performance.component';
import { AnalyzeEngagementComponent } from './analyze-engagement/analyze-engagement.component';
import { AnalyzeGeomapComponent } from './analyze-geomap/analyze-geomap.component';
import { AnalyzeDevicesComponent } from './analyze-devices/analyze-devices.component';
import { AnalyzeTrafficComponent } from './analyze-traffic/analyze-traffic.component';
import { AnalyzeReportsComponent } from './analyze-reports/analyze-reports.component';
import { AnalyzeReportsAddComponent } from './analyze-reports-add/analyze-reports-add.component';
import { ManagementEnvironmentCachesComponent } from './management-environment-caches/management-environment-caches.component';
import { ManagementEnvironmentFlowHooksComponent } from './management-environment-flow-hooks/management-environment-flow-hooks.component';
import { ManagementEnvironmentKeyMapsComponent } from './management-environment-key-maps/management-environment-key-maps.component';
import { ManagementEnvironmentReferenceComponent } from './management-environment-reference/management-environment-reference.component';
import { ManagementEnvironmentTargetComponent } from './management-environment-target/management-environment-target.component';
import { ManagementEnvironmentTlsComponent } from './management-environment-tls/management-environment-tls.component';
import { ManagementRolesComponent } from './management-roles/management-roles.component';
import { ManagementVirtualComponent } from './management-virtual/management-virtual.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'users',
                        component: ManagementUserComponent
                    },
                    {
                        path: 'environments/caches',
                        component: ManagementEnvironmentCachesComponent
                    },
                    {
                        path: 'environments/flow-hooks',
                        component: ManagementEnvironmentFlowHooksComponent
                    },
                    {
                        path: 'environments/key-maps',
                        component: ManagementEnvironmentKeyMapsComponent
                    },
                    {
                        path: 'environments/references',
                        component: ManagementEnvironmentReferenceComponent
                    },
                    {
                        path: 'environments/target-servers',
                        component: ManagementEnvironmentTargetComponent
                    },
                    {
                        path: 'environments/tls-keystores',
                        component: ManagementEnvironmentTlsComponent
                    },
                    {
                        path: 'roles',
                        component: ManagementRolesComponent
                    },
                    {
                        path: 'virtual-hosts',
                        component: ManagementVirtualComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'services',
                children: [
                    {
                        path: '',
                        component: ServicesComponent,
                    },
                    {
                        path: 'data-model',
                        component: DataModelComponent
                    }
                ]
            },
            {
                path: 'develop',
                children: [
                    {
                        path: 'specs',
                        component: DevelopSpecsComponent
                    },
                    {
                        path: 'proxies',
                        component: DevelopProxiesComponent
                    },
                    {
                        path: 'flows',
                        component: DevelopFlowsComponent
                    },
                    {
                        path: 'traces',
                        component: DevelopTracesComponent
                    },
                    {
                        path: 'proxies/create',
                        component: DevelopProxiesCreateComponent
                    }
                ]
            },
            {
                path: 'publish',
                children: [
                    {
                        path: 'products',
                        component: PublishProductsComponent
                    },
                    {
                        path: 'products/add',
                        component: PublishProductsAddComponent
                    },
                    {
                        path: 'portals',
                        component: PublishPortalsComponent
                    },
                    {
                        path: 'developers',
                        component: PublishDevelopersComponent
                    },
                    {
                        path: 'programs',
                        component: PublishProgramsComponent
                    }, 
                    {
                        path: 'apps',
                        component: PublishAppsComponent
                    }, 
                    {
                        path: 'apps/add',
                        component: PublishAppsAddComponent
                    }
                ]
            },
            {
                path: 'analyze',
                children: [
                    {
                        path: 'metrics/proxy',
                        component: AnalyzeProxyPerformanceComponent
                    },
                    {
                        path: 'metrics/cache',
                        component: AnalyzeCachePerformanceComponent
                    },
                    {
                        path: 'metrics/error',
                        component: AnalyzeErrorPerformanceComponent
                    },
                    {
                        path: 'metrics/target',
                        component: AnalyzeTargetPerformanceComponent
                    },
                    {
                        path: 'developers/engagement',
                        component: AnalyzeEngagementComponent
                    },
                    {
                        path: 'developers/traffic',
                        component: AnalyzeTrafficComponent
                    },
                    {
                        path: 'end-users/devices',
                        component: AnalyzeDevicesComponent
                    },
                    {
                        path: 'end-users/geomap',
                        component: AnalyzeGeomapComponent
                    },
                    {
                        path: 'custom/reports',
                        component: AnalyzeReportsComponent
                    },
                    {
                        path: 'custom/reports/add',
                        component: AnalyzeReportsAddComponent
                    }
                ]
            }
        ]
    }
]