import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-register-rider',
    standalone: true,
    templateUrl: './register-rider.component.html',
    styleUrl: './register-rider.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class RegisterRiderComponent {

}
