import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  template:`
  <label for="">Username</label>
  <input type="text" class="form-control" [(ngModel)] = 'userName' >
  <p>{{userName}}</p>
  <button (click)="clearName()" [disabled]=" userName ===''">Clear</button>
  `,

})
export class Assignment2Component {
  fieldIsEmpty = false
  userName:string = ''
  clearName () {
    this.userName = '' ;
  }
  
}
