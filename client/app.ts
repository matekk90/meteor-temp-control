import 'reflect-metadata';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Sensors }   from '../collections/sensors';
import { Mongo }     from 'meteor/mongo';

@Component({
    selector: 'app',
    templateUrl: '/client/app.html'
})
class TempControl {
    sensors:Mongo.Cursor<Object>;

    constructor() {
        this.sensors = Sensors.find();
    }
}

bootstrap(TempControl);
