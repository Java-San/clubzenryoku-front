import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modules
import { SharedModule } from './shared/shared.module';

// Components
import { ProvisoryComponent } from './components/provisory/provisory.component';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    ProvisoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
