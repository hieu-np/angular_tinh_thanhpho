import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProvinceComponent } from './components/province/province.component';
import { NavPageComponent } from './views/nav-page/nav-page.component';
import { ProvincePageComponent } from './views/province-page/province-page.component';

import { DistrictService } from './service/district.service';
import { ProvinceService } from './service/province.service';

import {RippleModule} from 'primeng/ripple';
import { PrimengModule } from './primeng/primeng.module';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProvinceComponent,
    NavPageComponent,
    ProvincePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RippleModule,
    PrimengModule,
    FormsModule
  ],
  providers: [ProvinceService, DistrictService],
  bootstrap: [AppComponent]
})
export class AppModule { }
