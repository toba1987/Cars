import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsService } from './service/cars.service';
@NgModule({
  imports: [
    CommonModule
  ],
    providers: [
        CarsService
    ],
  declarations: []
})
export class SharedModule { }
