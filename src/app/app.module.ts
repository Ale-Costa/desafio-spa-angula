import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { CalendarioComponent } from './calendario/calendario.component';
import { PilotosComponent } from './pilotos/pilotos.component';
import { ConstrutoresComponent } from './construtores/construtores.component'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarioComponent,
    PilotosComponent,
    ConstrutoresComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
