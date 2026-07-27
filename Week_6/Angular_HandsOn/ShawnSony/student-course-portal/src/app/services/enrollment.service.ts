import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];
  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) this.enrolledCourseIds.push(courseId);
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Course[] {
    // simplified for brevity
    return [];
  }
  
  getStudentsByCourse(courseId: number): Observable<any[]> {
    return of([]);
  }
}