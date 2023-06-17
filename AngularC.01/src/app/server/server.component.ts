import { Component } from "@angular/core";

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[ `
     .Online{
        color: white;
     }
    `]
})
export class ServerComponent {
    userId: number = 10;
    userStatus: string = 'Offline';
    
    constructor (){
        this.userStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getColor (){
        return this.userStatus === 'Online' ? 'Green' : 'Red' ;
    }
}
