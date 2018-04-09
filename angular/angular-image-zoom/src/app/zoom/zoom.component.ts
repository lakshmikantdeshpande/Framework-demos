import { Component } from '@angular/core';

@Component({
  selector: 'zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent {
  zoomedImageSrc = "assets/bigcat.jpg";
  smallImageSrc = "assets/smallcat.jpg";
}
