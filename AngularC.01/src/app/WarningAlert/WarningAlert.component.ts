import { Component } from "@angular/core";

@Component({
    selector: 'app-WorningAlert',
    template: 
    `
   <p>U Didn't Land At All</p>
    `,
    styles : [
    `
    p {
        color: darkred;
        font-size: 35px;
        font-weight: 800;
        background-color: mistyrose;
        border: 1px solid red;
        padding:15px;
        text-align:center;  
    }
    `]
})
export class WorningAlertComponent{
    
}