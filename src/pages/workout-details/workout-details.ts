import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../app/services/workout.service';
import {WorkoutPage} from '../workout/workout';


@Component({
  selector: 'workout-details',
  templateUrl: 'workout-details.html'
})
export class workoutdetailspage {

  public workoutlist: any;
  public result: any;


  constructor(public navctrl: NavController, public params: NavParams,public workoutservice: WorkoutService) {
    this.workoutlist = params.get('workout');
  }
     deleteworkout(id){
     console.log('delete workout');
     this.workoutservice.deleteworkout(id).subscribe(res => {
       this.result = res;
     });

     this.navctrl.push(WorkoutPage)
   }


}
