import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AdminProductsComponent } from './Component/admin-products/admin-products.component';
import { AdminOrdersTableComponent } from './Component/admin-orders-table/admin-orders-table.component';
import { AdminCustomerTableComponent } from './Component/admin-customer-table/admin-customer-table.component';
import { AdminAddProductComponent } from './Component/admin-add-product/admin-add-product.component';

export const adminRoutes: Routes = [
    {path:'', component:AdminComponent, children:[
        {path:'', component:DashboardComponent},
        {path:'products', component:AdminProductsComponent},
        {path:'orders', component:AdminOrdersTableComponent},
        {path:'customers', component:AdminCustomerTableComponent},
        {path:'add-product', component:AdminAddProductComponent}
    ]}
];