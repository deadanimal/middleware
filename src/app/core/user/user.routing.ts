import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { DiscoveryComponent } from './discovery/discovery.component';

export const UserRoutes: Routes = [
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
                component: DiscoveryComponent
            }
        ]
    }
]