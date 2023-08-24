import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: string[] = [];

  constructor() {}

  addData(item: string): void {
    this.data.push(item);
  }

  getAllData(): string[] {
    return this.data;
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}
