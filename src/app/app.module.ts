import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadsComponent } from './topheads/topheads.component';
import { HttpClientModule } from '@angular/common/http';
import { TcnewsapiService} from  './service/tcnewsapi.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessComponent } from './business/business.component'

@NgModule({
  declarations: [
    AppComponent,
    TopheadsComponent,
    TechnewsComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TcnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
