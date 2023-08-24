import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-number-display',
  templateUrl: './number-display.component.html',
  styleUrls: ['./number-display.component.css'],
})
export class NumberDisplayComponent {
  @Input() number: number | undefined;

  constructor(private dataService: DataService) {}
}
