import { Component } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  starred: boolean;

  toggleStar() {
    this.starred = !this.starred;
  }
}
