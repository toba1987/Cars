import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';
import { SharedModule } from './shared/shared.module';
import { CarFormComponent } from './components/cars/car-form/car-form.component';
import { FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      SharedModule,
      FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
