import{Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class WorkoutService{

    http: any;
    apiKey: string;
    workoutsUrl: string;
    resultAdd: any;

    constructor(private _http: Http){
        this.http = _http;
        this.apiKey = 'AoV9_7_qiKYTYrxMnInMQ8TPwRCRhqqm';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkoutmontoya/collections/workouts'; 
    }

    getWorkouts(){
      return this._http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
      .map(res => res.json());  
    }
    addworkout(workoutlist){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workoutlist),{headers:headers})
        .map(res => res.json());

    }
    deleteworkout(id){
         return this._http.delete(this.workoutsUrl+'/'+ id +'?apiKey='+this.apiKey)
        .map(res => res.json());
    }
}