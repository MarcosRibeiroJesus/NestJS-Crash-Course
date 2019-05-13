import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemsComponent } from './modules/items/items.component';
import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart.component';
import { LoginComponent } from './modules/login/login.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { AdminComponent } from './modules/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ShoppingCartComponent,
    LoginComponent,
    LayoutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
