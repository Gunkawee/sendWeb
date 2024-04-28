import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { query } from 'express';


@Component({
    selector: 'app-register-rider',
    standalone: true,
    templateUrl: './register-rider.component.html',
    styleUrl: './register-rider.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class RegisterRiderComponent {
[x: string]: any;

policyThSt = "Th"
policyEnSt = "En"
constructor(private router: Router){

}
policyTh(){
  this.router.navigate(['/policy'],{queryParams:{policyTh:this.policyThSt}})

}
policyEn(){

}

}
