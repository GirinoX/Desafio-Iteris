import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ServicosComponent } from './serviços/servicos/servicos.component';
import { DetallhesComponent } from './detallhes/detallhes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServicosComponent,
    DetallhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
