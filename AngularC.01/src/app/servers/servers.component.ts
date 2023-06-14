import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewUser = false ;

  constructor (){
    setTimeout(() => { this.allowNewUser = true} , 5000 );
  };

}
