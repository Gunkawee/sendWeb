import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RegisterRiderComponent } from './register-rider/register-rider.component';
import { RegisterRiderFormComponent } from './register-rider-form/register-rider-form.component';
import { NewsComponent } from './news/news.component';
import { ReadnewsComponent } from './readnews/readnews.component';
import { Readnews2Component } from './readnews2/readnews2.component';
import { Readnews3Component } from './readnews3/readnews3.component';

export const routes: Routes = [
    {"path" : "",component:BodyComponent},
     {"path" : "register",component:RegisterRiderComponent},
     {"path" : "registerForm",component:RegisterRiderFormComponent},
     {"path" : "news",component:NewsComponent},
     {"path" : "readNews",component:ReadnewsComponent},
     {"path" : "readNews2",component:Readnews2Component},
     {"path" : "readNews3",component:Readnews3Component},
]; 
