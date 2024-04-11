import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-readnews',
    standalone: true,
    templateUrl: './readnews.component.html',
    styleUrl: './readnews.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class ReadnewsComponent {

}
