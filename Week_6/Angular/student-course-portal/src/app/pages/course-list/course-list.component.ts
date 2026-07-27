import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  template: `
    <div>
      <input [(ngModel)]="searchTerm" placeholder="Search">
      <p>Searching for: {{ searchTerm }}</p>
      
      <p *ngIf="isLoading">Loading courses...</p>
      
      <div *ngIf="!isLoading">
        <ng-container *ngIf="(courses$ | async) as courses">
          <div *ngIf="courses.length > 0; else noCourses">
            <app-course-card *ngFor="let c of courses; trackBy: trackByCourseId" 
              [course]="c" (enrollRequested)="onEnroll($event)" (click)="goToCourse(c.id)">
            </app-course-card>
          </div>
          <ng-template #noCourses><p>No courses available.</p></ng-template>
        </ng-container>
        <p style="color:red" *ngIf="errorMessage">{{ errorMessage }}</p>
      </div>
      <p *ngIf="selectedCourseId">Selected course ID: {{ selectedCourseId }}</p>
    </div>
  `
})
export class CourseListComponent implements OnInit {
  searchTerm = '';
  isLoading = true;
  selectedCourseId!: number;
  errorMessage = '';
  courses$!: Observable<Course[]>;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.courses$ = this.courseService.getCourses();
    setTimeout(() => this.isLoading = false, 1500);
  }

  trackByCourseId(index: number, course: Course) { return course.id; }
  
  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
  
  goToCourse(id: number) {
    this.router.navigate(['courses', id]);
  }
}