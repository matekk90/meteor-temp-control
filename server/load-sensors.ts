import { Sensors } from '../collections/sensors.ts';

export function loadSensors() {
    if ( Sensors.find().count() === 0 ) {

        var measures = [ {
            date: new Date(),
            value: Math.round(Math.random() * 100)
        }, {
            date: new Date(),
            value: Math.round(Math.random() * 100)
        }, {
            date: new Date(),
            value: Math.round(Math.random() * 100)
        }, {
            date: new Date(),
            value: Math.round(Math.random() * 100)
        }, {
            date: new Date(),
            value: Math.round(Math.random() * 100)
        }, {
            date: new Date(),
            value: Math.round(Math.random() * 100)
        } ];

        var sensors = [
            {
                'name': 'Fermentation',
                'measures': measures
            },
            {
                'name': 'Kegerator',
                'measures': measures
            },
            {
                'name': 'Mashing',
                'measures': measures
            }
        ];

        for ( var i = 0; i < sensors.length; i++ ) {
            Sensors.insert(sensors[ i ]);
        }
    }
}
