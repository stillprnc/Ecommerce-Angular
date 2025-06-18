import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"cart", component:CartComponent},
    {path:"product-detailsPage/:id", component:ProductDetailsPageComponent},
    {path:"checkout", component:CheckoutComponent},
    {path:"checkout/payment/:id", component:PaymentComponent},
    {path:':lavelOne/:lavelTwo/:lavelThree', component:ProductsComponent},
    {path:"payment-success", component:PaymentSuccessComponent},
    {path:"account/orders", component:OrderComponent},
    {path:"order/:id", component:OrderDetailsComponent}
];
