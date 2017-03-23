import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'
import { WorkoutService } from '../../app/services/workout.service';
import {workoutdetailspage} from '../workout-details/workout-details';


@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html'
})
export class WorkoutPage {
  constructor(public navctrl: NavController, private workoutService: WorkoutService) {

  }

  workoutsList: any;


  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.workoutService.getWorkouts().subscribe(workouts => {
      console.log(workouts.title);
      this.workoutsList = workouts;
    })
  }
  workoutSelected(event, item) {
    console.log("to details: "+ item.title);
    this.navctrl.push(workoutdetailspage, {
      workout: item
    });
  }

  ionViewWillEnter(){
    this.workoutService.getWorkouts().subscribe(work => {
      this.workoutsList = work;
    })
  }
}
