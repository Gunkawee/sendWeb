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
    calPrice(){
        alert("Hello World");
        console.log("Hellow");
    }

}
