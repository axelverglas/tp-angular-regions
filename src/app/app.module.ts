import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegionsComponent } from './pages/regions/regions.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// locale:

import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { UcfirstPipe } from './pipes/ucfirst.pipe';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FranceMapComponent } from './components/france-map/france-map.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DepartementListComponent } from './components/departement-list/departement-list.component';
import { CityListComponent } from './components/city-list/city-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegionsComponent,
    UcfirstPipe,
    HeaderComponent,
    HeroComponent,
    FranceMapComponent,
    DepartementListComponent,
    CityListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
