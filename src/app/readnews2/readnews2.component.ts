import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-readnews2',
    standalone: true,
    templateUrl: './readnews2.component.html',
    styleUrl: './readnews2.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class Readnews2Component {

}
