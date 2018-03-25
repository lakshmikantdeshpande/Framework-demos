import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor='let course of courses'>
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    private title = "List of courses";
    courses = ['English', 'Hindi', 'Marathi'];
}