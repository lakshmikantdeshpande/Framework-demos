import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  imageUrl: string;
  colspan: number;
  isActive:boolean = true;

  constructor() {
     this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/c/c9/Jaguar_head_shot-edit2.jpg";
     this.colspan = 2;
   }

  ngOnInit() {
  }

  onSave() {
    alert('I guess it\'s saved! :P');
  }

  saveIt($event) {
    console.log($event);
    alert(`I guess it\'s saved at ${$event.screenX}, ${$event.screenY} :p`);
  }

  saveEvent($event, propagate: boolean) {
    console.log('event saved');
    if (!propagate) {
      $event.stopPropagation();
    }
  }

  divClcked() {
    console.log('div was clicked');
  }

  onEnterKeyPressed() {
    alert('You pressed ENTER, please don\'t');
  }

}
