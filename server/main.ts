import { loadSensors } from './load-sensors.ts';
import { Meteor } from 'meteor/meteor';

Meteor.startup(loadSensors);
