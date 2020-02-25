import { Component, OnInit } from '@angular/core';
import {InterestService} from '../services/interest.service'

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private service:InterestService) { }

  ngOnInit(): void {
  }

  
  Total: number = 0;
  years: number;
  calculateinterest(): void {
    this.Total = this.service.calculateinterest(this.years)
    
  }

}
