import { Component } from '@angular/core';
import { CarsService } from '../../shared/service/cars.service';
import { Car } from '../../shared/models/cars.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
})
export class CarsComponent {

    private cars: any[];
    private newCar: Car = new Car();

  constructor(private carsService: CarsService) {

      this.cars = carsService.getCars();
  }

}
