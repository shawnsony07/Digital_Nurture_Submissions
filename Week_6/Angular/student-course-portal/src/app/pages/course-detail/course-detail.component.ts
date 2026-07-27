import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="course">
      <h2>{{ course.name }}</h2>
      <p>Code: {{ course.code }}</p>
    </div>
  `
})
export class CourseDetailComponent implements OnInit {
  course!: Course;
  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe(c => this.course = c);
  }
}