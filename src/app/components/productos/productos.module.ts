import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { ProductsComponent } from './pages/products/products.component';
import { CreateComponent } from './pages/create/create.component';
import { ProductosRouting } from './productos-routing.module';



@NgModule({
  declarations: [
    EditComponent,
    ListComponent,
    ProductsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ProductosRouting
  ]
})
export class ProductosModule { }
