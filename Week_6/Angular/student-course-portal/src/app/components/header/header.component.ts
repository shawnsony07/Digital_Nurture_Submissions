import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <h2>Student Course Portal</h2>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/courses">Courses</a></li>
        <li><a routerLink="/profile">Profile</a></li>
        <li><a routerLink="/enroll">Enroll (Template Form)</a></li>
        <li><a routerLink="/enroll/reactive">Enroll (Reactive Form)</a></li>
      </ul>
    </nav>
  `
})
export class HeaderComponent {}