import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutPage} from '../workout/workout';

@Component({
  selector: 'addworkout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {

  public title: string;
  public note: string;
  public type: string;
  public result: any;

  constructor(public navctrl: NavController, public services: WorkoutService) {
    
  }

  OnSubmit(){
    console.log('adding workout');
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    //add workout
    this.services.addworkout(workout).subscribe(res => {
      this.result = res;
    });

    this.navctrl.push(WorkoutPage);
  }

}
