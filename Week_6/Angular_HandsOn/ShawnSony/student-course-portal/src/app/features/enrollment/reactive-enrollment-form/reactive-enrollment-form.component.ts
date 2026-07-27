import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

function noCourseCode(control: AbstractControl): ValidationErrors | null {
  if (control.value && typeof control.value === 'string' && control.value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      if (control.value && control.value.includes('test@')) resolve({ emailTaken: true });
      else resolve(null);
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="enrollForm" (ngSubmit)="onSubmit()">
      <input formControlName="studentName">
      <input formControlName="studentEmail">
      <span *ngIf="enrollForm.get('studentEmail')?.errors?.['emailTaken']">Email taken</span>
      <input formControlName="courseId">
      <span *ngIf="enrollForm.get('courseId')?.errors?.['noCourseCode']">Course code starting with XX is not allowed.</span>
      <select formControlName="preferredSemester"><option>Odd</option><option>Even</option></select>
      <input type="checkbox" formControlName="agreeToTerms">
      
      <div formArrayName="additionalCourses">
        <div *ngFor="let ctrl of additionalCourses.controls; let i=index">
          <input [formControlName]="i">
          <button type="button" (click)="removeCourse(i)">Remove</button>
        </div>
      </div>
      <button type="button" (click)="addCourse()">Add Another Course</button>
      
      <button type="submit" [disabled]="enrollForm.invalid">Submit</button>
    </form>
  `
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: [null, [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }
  
  get additionalCourses() { return this.enrollForm.get('additionalCourses') as FormArray; }
  
  addCourse() { this.additionalCourses.push(this.fb.control('', Validators.required)); }
  removeCourse(i: number) { this.additionalCourses.removeAt(i); }
  
  onSubmit() {
    console.log(this.enrollForm.value);
    console.log(this.enrollForm.getRawValue());
  }
}