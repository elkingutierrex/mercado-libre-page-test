import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemDetailComponent } from './pages/product-items/item-detail/item-detail.component';
import { ProductItemsComponent } from './pages/product-items/product-items.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: 'items',
        component: ProductItemsComponent,
        children:[
          {
            path : ':id',
            component : ItemDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo : 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
