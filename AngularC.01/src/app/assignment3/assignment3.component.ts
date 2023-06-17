import { Component } from '@angular/core';

@Component ({
    selector: 'app-assignment3',
    template: `
        <button (click)="displayhOnClick()"> Display Details</button>
        <p *ngIf="displayElement"> Saturation = 77</p>
        <div *ngFor="let Saturation of saturations"
            [ngStyle]="{backgroundColor: Saturation >= 5 ? 'blue' : 'transparent'}"
            [ngClass]="{'white-text' : Saturation>=5 }"
        > {{Saturation}}</div>
    `,
    styles:[`
        .white-text {
            color : white;
        }
    `] ,

})
export class Assignment3component{
    displayElement = true ;
    saturations: any  = [] ;

    displayhOnClick () {
        this.displayElement = !this.displayElement;
        this.saturations.push(this.saturations.length +1);
        

    }
}