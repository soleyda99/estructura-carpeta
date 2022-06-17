import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: ListComponent },
      { path: 'create', component: CreateComponent },
      { path: 'edit', component: EditComponent },
      { path: 'products', component: ProductsComponent },
      { path: '**', redirectTo: 'products' }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class ProductosRouting { }
