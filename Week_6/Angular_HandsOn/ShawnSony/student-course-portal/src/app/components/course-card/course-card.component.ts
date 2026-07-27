import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  template: `
    <div appHighlight="lightblue" [ngClass]="cardClasses" [ngStyle]="{'border-left': gradeColor}">
      <h3>{{ course.name }}</h3>
      <p>Code: {{ course.code }}</p>
      <p>{{ course.credits | creditLabel }}</p>
      <div [ngSwitch]="course.gradeStatus">
        <span *ngSwitchCase="'passed'" style="color:green">Passed</span>
        <span *ngSwitchCase="'failed'" style="color:red">Failed</span>
        <span *ngSwitchCase="'pending'" style="color:grey">Pending</span>
      </div>
      <button (click)="enrollRequested.emit(course.id)">Enroll</button>
      <button (click)="isExpanded = !isExpanded">Show Details</button>
    </div>
  `,
  styles: [`
    .card--enrolled { font-weight: bold; }
    .card--full { background-color: #f0f0f0; }
    .expanded { height: 200px; }
  `]
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();
  isExpanded = false;

  get gradeColor() {
    if (this.course.gradeStatus === 'passed') return 'green';
    if (this.course.gradeStatus === 'failed') return 'red';
    return 'grey';
  }

  get cardClasses() {
    return {
      'card--enrolled': false,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges fired', changes);
  }
}