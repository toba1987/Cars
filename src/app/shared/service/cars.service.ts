import { Injectable } from '@angular/core';

import { Car } from '../models/cars.model';
import { cars } from '../../components/cars/cars';
import {  RouterModule,  Router } from "@angular/router";
@Injectable()
export class CarsService {

    private cars: any[];

    constructor(private router: Router ) {
        this.cars = cars;

    }

    public getCars(){
        return this.cars;
    }

    public addCar(car: Car){

        this.cars.push({
            id: this.cars.length + 1,
            mark: car.mark,
            model: car.model,
            year: car.year,
            maxSpeed: car.maxSpeed,
            isAutomatic: car.isAutomatic,
            engine: car.engine,
            numberOfDoors: car.numberOfDoors
        });

        this.router.navigate(['/cars']);
    }

}
