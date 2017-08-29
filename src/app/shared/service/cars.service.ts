import { Injectable } from '@angular/core';

import { Car } from '../models/cars.model';
import { cars } from '../../components/cars/cars';

@Injectable()
export class CarsService {

    private cars: any[];

    constructor() {
        this.cars = cars;
    }

    public getCars(){
        return this.cars;
    }

}
