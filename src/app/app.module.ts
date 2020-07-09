import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPayPalModule } from 'ngx-paypal';

import { CompanyService } from './services/company.service';
import { SmartTableService } from './@core/smart-table';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    SharedModule,
    NgxPayPalModule,
  ],
  providers: [
    SmartTableService,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
