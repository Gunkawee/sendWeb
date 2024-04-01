import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-register-rider-form',
    standalone: true,
    templateUrl: './register-rider-form.component.html',
    styleUrl: './register-rider-form.component.css',
    imports: [FooterComponent]
})
export class RegisterRiderFormComponent {

}
