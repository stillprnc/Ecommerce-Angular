import { Routes } from '@angular/router';
import { HomeComponent } from './Module/feature/Component/home/home.component';
import { ProductsComponent } from './Module/feature/Component/home/products/products.component';
import { CartComponent } from './Module/feature/Component/cart/cart.component';
import { ProductDetailsPageComponent } from './Module/feature/Component/product-details-page/product-details-page.component';
import { CheckoutComponent } from './Module/feature/Component/checkout/checkout.component';
import { PaymentComponent } from './Module/feature/Component/payment/payment.component';
import { PaymentSuccessComponent } from './Module/feature/Component/payment-success/payment-success.component';
import { OrderComponent } from './Module/feature/Component/order/order.component';
import { OrderDetailsComponent } from './Module/feature/Component/order-details/order-details.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"cart", component:CartComponent},
    {path:"product-detailsPage/:id", component:ProductDetailsPageComponent},
    {path:"checkout", component:CheckoutComponent},
    {path:"checkout/payment/:id", component:PaymentComponent},
    {path:':lavelOne/:lavelTwo/:lavelThree', component:ProductsComponent},
    {path:"payment-success", component:PaymentSuccessComponent},
    {path:"account/orders", component:OrderComponent},
    {path:"order/:id", component:OrderDetailsComponent},
    {path:"admin", loadChildren:()=>import("./Module/admin/admin.routes").then(m=>m.adminRoutes)}
];
 