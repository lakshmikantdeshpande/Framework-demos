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

  paragraph = `
  "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac mauris elementum, placerat metus at, malesuada elit. Vestibulum sit amet dapibus libero, id faucibus turpis. Duis tempor urna at elit viverra sollicitudin. Nullam dignissim lorem at elementum lobortis. Pellentesque mollis pretium purus, non venenatis dolor sollicitudin vel. Mauris nibh risus, consectetur ac vulputate quis, tempus et magna. Nunc velit lacus, luctus luctus erat id, sollicitudin convallis lorem. Quisque feugiat tellus quis quam iaculis tempor. In condimentum maximus lectus, eget suscipit mi sagittis ut. Mauris eu mollis massa, vestibulum volutpat nulla.
  `;
}
