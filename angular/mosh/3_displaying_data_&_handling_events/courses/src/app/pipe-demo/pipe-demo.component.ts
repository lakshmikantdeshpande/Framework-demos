import { Component } from '@angular/core';

@Component({
  selector: 'pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {
  course = {
    title: "The angular course",
    rating: 3.1415,
    students: 152321,
    price: 544.88,
    releaseDate: new Date(2018, 25, 3)
  }
}
