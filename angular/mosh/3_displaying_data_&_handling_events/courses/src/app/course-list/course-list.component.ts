import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  imageUrl: string;
  colspan: number;

  constructor() {
     this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/c/c9/Jaguar_head_shot-edit2.jpg";
     this.colspan = 2;
   }

  ngOnInit() {
  }

}
