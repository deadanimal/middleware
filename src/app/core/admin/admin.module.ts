import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { MatStepperModule } from '@angular/material/stepper';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
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
import { PublishProgramsComponent } from './publish-programs/publish-programs.component';
import { PublishDevelopersComponent } from './publish-developers/publish-developers.component';
import { PublishAppsComponent } from './publish-apps/publish-apps.component';
import { PublishProductsAddComponent } from './publish-products-add/publish-products-add.component';
import { PublishAppsAddComponent } from './publish-apps-add/publish-apps-add.component';
import { AnalyzeProxyPerformanceComponent } from './analyze-proxy-performance/analyze-proxy-performance.component';
import { AnalyzeCachePerformanceComponent } from './analyze-cache-performance/analyze-cache-performance.component';
import { AnalyzeErrorPerformanceComponent } from './analyze-error-performance/analyze-error-performance.component';
import { AnalyzeTargetPerformanceComponent } from './analyze-target-performance/analyze-target-performance.component';
import { AnalyzeEngagementComponent } from './analyze-engagement/analyze-engagement.component';
import { AnalyzeTrafficComponent } from './analyze-traffic/analyze-traffic.component';
import { AnalyzeDevicesComponent } from './analyze-devices/analyze-devices.component';
import { AnalyzeGeomapComponent } from './analyze-geomap/analyze-geomap.component';
import { AnalyzeReportsComponent } from './analyze-reports/analyze-reports.component';
import { AnalyzeReportsAddComponent } from './analyze-reports-add/analyze-reports-add.component';
import { ManagementVirtualComponent } from './management-virtual/management-virtual.component';
import { ManagementRolesComponent } from './management-roles/management-roles.component';
import { ManagementEnvironmentCachesComponent } from './management-environment-caches/management-environment-caches.component';
import { ManagementEnvironmentFlowHooksComponent } from './management-environment-flow-hooks/management-environment-flow-hooks.component';
import { ManagementEnvironmentKeyMapsComponent } from './management-environment-key-maps/management-environment-key-maps.component';
import { ManagementEnvironmentReferenceComponent } from './management-environment-reference/management-environment-reference.component';
import { ManagementEnvironmentTargetComponent } from './management-environment-target/management-environment-target.component';
import { ManagementEnvironmentTlsComponent } from './management-environment-tls/management-environment-tls.component';
import { DevelopProxiesCreateReverseComponent } from './develop-proxies-create-reverse/develop-proxies-create-reverse.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    ServicesComponent,
    DataModelComponent,
    DevelopSpecsComponent,
    DevelopProxiesComponent,
    DevelopFlowsComponent,
    DevelopTracesComponent,
    DevelopProxiesCreateComponent,
    PublishProductsComponent,
    PublishPortalsComponent,
    PublishProgramsComponent,
    PublishDevelopersComponent,
    PublishAppsComponent,
    PublishProductsAddComponent,
    PublishAppsAddComponent,
    AnalyzeProxyPerformanceComponent,
    AnalyzeCachePerformanceComponent,
    AnalyzeErrorPerformanceComponent,
    AnalyzeTargetPerformanceComponent,
    AnalyzeEngagementComponent,
    AnalyzeTrafficComponent,
    AnalyzeDevicesComponent,
    AnalyzeGeomapComponent,
    AnalyzeReportsComponent,
    AnalyzeReportsAddComponent,
    ManagementVirtualComponent,
    ManagementRolesComponent,
    ManagementEnvironmentCachesComponent,
    ManagementEnvironmentFlowHooksComponent,
    ManagementEnvironmentKeyMapsComponent,
    ManagementEnvironmentReferenceComponent,
    ManagementEnvironmentTargetComponent,
    ManagementEnvironmentTlsComponent,
    DevelopProxiesCreateReverseComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    MatStepperModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AdminModule { }
