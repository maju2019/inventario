import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EquiposComponent } from './equipos/equipos.component';
import { MonitoresComponent } from './monitores/monitores.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EquiposComponent,
    MonitoresComponent,
    MenuComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
