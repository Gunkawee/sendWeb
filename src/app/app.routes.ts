import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RegisterRiderComponent } from './register-rider/register-rider.component';
import { RegisterRiderFormComponent } from './register-rider-form/register-rider-form.component';

export const routes: Routes = [
    {"path" : "",component:BodyComponent},
     {"path" : "register",component:RegisterRiderComponent},
    // {"path" : "/registerForm",component:RegisterRiderFormComponent}
]; 
