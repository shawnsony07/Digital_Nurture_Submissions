import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>{{ portalName }}</h1>
    <p>Welcome to the digital student course portal.</p>
    <div>
      Courses Available: {{ coursesCount }}, Enrolled: 3, GPA: 3.8
    </div>
    <button [disabled]="!isPortalActive" (click)="onEnrollClick()">Enroll Now</button>
    <p>{{ message }}</p>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  coursesCount = 0;

  constructor(private courseService: CourseService) {}

  onEnrollClick() { this.message = 'Enrollment opened!'; }

  ngOnInit() {
    console.log('HomeComponent initialised — courses loaded');
    this.courseService.getCourses().subscribe(c => this.coursesCount = c.length);
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }
}