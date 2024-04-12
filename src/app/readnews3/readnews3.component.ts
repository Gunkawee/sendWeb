import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-readnews3',
    standalone: true,
    templateUrl: './readnews3.component.html',
    styleUrl: './readnews3.component.css',
    imports: [FooterComponent, HeaderComponent]
})
export class Readnews3Component {

}
