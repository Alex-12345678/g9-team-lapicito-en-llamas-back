import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
//import { NgxChartsModule }from '@swimlane/ngx-charts';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* import { AppRoutingModule } from './app-routing.module'; */
import { AppComponent } from './app.component';
import { KmeansComponent } from './components/kmeans/kmeans.component';
import { PanelComponent } from './components/panel/panel.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchClusterPipe } from './pipes/search-cluster.pipe';
import { MetododelCodoComponent } from './components/metododel-codo/metododel-codo.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { Chart } from 'chart.js';
import { EscoComponent } from './components/esco/esco.component';

@NgModule({
  declarations: [
    AppComponent,
    KmeansComponent,
    PanelComponent,
    NavbarComponent,
    HomeComponent,
    SearchClusterPipe,
    MetododelCodoComponent,
    ClasificacionComponent,
    EscoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,

    //BrowserAnimationsModule,
    //NgxChartsModule
  ],
  exports: [NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
