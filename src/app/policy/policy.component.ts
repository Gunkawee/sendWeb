import { Component, OnInit } from '@angular/core';
import { constants } from 'buffer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css'
})
export class PolicyComponent implements OnInit {

  constructor(private router: ActivatedRoute){

  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      if(params){
        console.log(params?.["policyTh"])

      }
    })
  }

  
}
