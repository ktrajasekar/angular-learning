import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataapiComponent } from './dataapi/dataapi.component';
import { CoinsComponent } from './coins/coins.component';
import { HomeComponent } from './home/home.component';
import { InvoiceGeneratorComponent } from './invoice-generator/invoice-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    DataapiComponent,
    CoinsComponent,
    HomeComponent,
    InvoiceGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
