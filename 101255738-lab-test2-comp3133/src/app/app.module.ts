import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NetworkComponent } from './network/network.component';

@NgModule({
  declarations: [
    AppComponent,
    MissiondetailsComponent,
    NetworkComponent
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
