import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }

  getAuthors() {
    return ['V D Karandikar', 'P L Deshpande', 'F M Shinde'];
  }

}
