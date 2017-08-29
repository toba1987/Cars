import { Component} from '@angular/core';
import { CarsService } from '../../../shared/service/cars.service';
import { Car } from '../../../shared/models/cars.model';



@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
})
export class CarFormComponent {

   private releaseDates: any[] = [];
    private newCar: Car = new Car();

  constructor(private carsService: CarsService) {
    this.getYearCar();


  }

    getYearCar(){

        for(let i = 1990; i <= 2017; i++){
            this.releaseDates.push(i);
        }

    }

    addCar(newCar: Car){
        this.carsService.addCar(newCar);

    }


}
