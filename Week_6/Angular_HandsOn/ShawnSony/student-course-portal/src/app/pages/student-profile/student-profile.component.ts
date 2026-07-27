import { Component } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Student Profile</h2>
    <p>Enrolled Courses:</p>
    <ul>
      <li *ngFor="let c of enrolledCourses">{{ c.name }}</li>
    </ul>
  `
})
export class StudentProfileComponent {
  enrolledCourses = [];
  constructor(private enrollmentService: EnrollmentService) {
    // this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }
}