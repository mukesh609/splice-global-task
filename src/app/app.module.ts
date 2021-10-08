import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MainComponent } from './main/main.component';
import { DrawerComponent } from './drawer/drawer.component';
import { TableComponent } from './table/table.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { PopoverModule } from 'ngx-smart-popover';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DrawerComponent,
    TableComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PopoverModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
