import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-register-rider-form',
    standalone: true,
    templateUrl: './register-rider-form.component.html',
    styleUrl: './register-rider-form.component.css',
    imports: [FooterComponent, HeaderComponent]
})
export class RegisterRiderFormComponent {

}
