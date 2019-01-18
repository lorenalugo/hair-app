import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosisComponent } from './section/diagnosis/diagnosis.component';
import { ProductsComponent } from './section/products/products.component';

const routes: Routes = [
{ path: '', redirectTo: '/hair-diagnosis', pathMatch: 'full' },
{ path: 'hair-diagnosis', component: DiagnosisComponent },
{ path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
