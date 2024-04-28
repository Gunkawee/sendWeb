import { Component, OnInit } from '@angular/core';
import { constants } from 'buffer';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-policy',
    standalone: true,
    templateUrl: './policy.component.html',
    styleUrl: './policy.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class PolicyComponent implements OnInit {

  constructor(private router: ActivatedRoute){

  }
  policyTxt = "";
  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      if(params){

        if (params?.["policyTh"]) {
          this.policyTxt = "TH"
          console.log(this.policyTxt);

        }
        if (params?.["policyEn"]) {
          this.policyTxt = "EN"
          console.log(this.policyTxt);

        }

      }
    })
  }


}
