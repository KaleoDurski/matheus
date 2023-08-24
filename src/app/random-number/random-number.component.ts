import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css'],
})
export class RandomNumberComponent implements OnInit {
  randomNumber: number | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.generateRandomNumber();
  }

  generateRandomNumber(): void {
    this.randomNumber = this.dataService.getRandomNumber();
  }
}
