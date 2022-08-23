import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "B3dserk Studios";
  numberArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  PI:number = Math.PI;
  percentage: number = 0.234;
  salary: number = 1234.5;
  hero:any = {
    fullName: "Barry Allen",
    aka: "Flash",
    age: 37,
    address: {
      city: "Central City",
      country: "United States",
    }
  };
  promise = new Promise<string>(resolve => {
    setTimeout(() => {resolve("data arrived!")}, 3500);
  });
  date: Date = new Date();
  language: string = "es";

  changeLanguage(lang: string){
    this.language = lang;
  }
}
