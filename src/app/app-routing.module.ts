import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataapiComponent } from './dataapi/dataapi.component';
import { CoinsComponent } from './coins/coins.component';
import { InvoiceGeneratorComponent } from './invoice-generator/invoice-generator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'datafetch', component: DataapiComponent },
  { path: 'coin', component: CoinsComponent },
  { path: 'invoice', component: InvoiceGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
