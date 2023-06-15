import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  // angular properties: we must first make properties in Ts file and then we can use them in html file to display
  allowNewUser = false ;
  serverCreationStatus = 'No server was created!' ;
  serverName = 'Test Server';
  // angular functions: we create functions in Ts in export class, in angular functions we call methods


  //set timeout function
  constructor (){
    setTimeout(() => { this.allowNewUser = true} , 5000 );
  };
  

  onCreateServer() {
    this.serverCreationStatus = 'Server was created ! Name is ' + this.serverName;
  }
  // this is example of how we can target dom elements. in this case we target html input to get text as a value
  // to display the text
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
