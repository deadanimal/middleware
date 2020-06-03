import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { PaymentComponent } from './payment/payment.component';
import { DiscoveryPrivateComponent } from './discovery-private/discovery-private.component';

export const OrganisationRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'payment',
                component: PaymentComponent
            },
            {
                path: 'discovery',
                children: [
                    {
                        path: 'public',
                        component: DiscoveryComponent
                    },
                    {
                        path: 'private',
                        component: DiscoveryPrivateComponent
                    }
                ]
            }
        ]
    }
]