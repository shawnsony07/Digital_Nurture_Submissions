import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private http: HttpClient) {}
  
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses').pipe(
      retry(2),
      map(courses => courses.filter(c => c.credits > 0)),
      tap(courses => console.log('Courses loaded:', courses.length)),
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`http://localhost:3000/courses/${id}`);
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>('http://localhost:3000/courses', course);
  }
}