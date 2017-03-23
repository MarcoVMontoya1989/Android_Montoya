import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutPage} from '../workout/workout';

@Component({
  selector: 'addworkout',
  templateUrl: 'add-workout.html'
})
export class DeleteWorkoutPage {

  constructor(public navctrl: NavController, public services: WorkoutService) {
    
  }
}
