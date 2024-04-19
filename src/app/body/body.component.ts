import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class BodyComponent {
    weight = 0;
    calculate(xCal:any,yCal:any){
            console.log(parseInt(xCal) + parseInt(yCal));
            
        if (parseInt(xCal) + parseInt(yCal) < 50) {
            this.weight = 28;
        } if(parseInt(xCal) + parseInt(yCal) < 40){
            this.weight = 18;
        } if(parseInt(xCal) + parseInt(yCal) < 30){
            this.weight = 14;
        } if(parseInt(xCal) + parseInt(yCal) < 15){
            this.weight = 9;
        }
    }

}
