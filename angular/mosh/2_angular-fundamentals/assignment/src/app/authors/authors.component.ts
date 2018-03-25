import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: string[];
  title: string;
  
  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
    this.title = `${this.authors.length} Authors`;
  }

  ngOnInit() {
  }

}
