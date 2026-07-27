import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form #enrollForm="ngForm" (ngSubmit)="onSubmit(enrollForm)">
      <div>
        <input name="studentName" ngModel required minlength="3" #nameCtrl="ngModel">
        <span *ngIf="nameCtrl.touched && nameCtrl.errors?.['required']">Name is required</span>
        <span *ngIf="nameCtrl.touched && nameCtrl.errors?.['minlength']">Name must be at least 3 characters</span>
      </div>
      <div>
        <input name="studentEmail" type="email" ngModel required>
      </div>
      <div>
        <input name="courseId" type="number" ngModel required>
      </div>
      <div>
        <select name="preferredSemester" ngModel>
          <option value="Odd">Odd</option>
          <option value="Even">Even</option>
        </select>
      </div>
      <div>
        <input name="agreeToTerms" type="checkbox" ngModel required>
      </div>
      <button type="submit" [disabled]="enrollForm.invalid">Submit</button>
      <button type="button" (click)="enrollForm.resetForm()">Reset</button>
      <div *ngIf="submitted">Enrollment request submitted successfully!</div>
    </form>
  `,
  styles: [`
    .ng-invalid.ng-touched { border-color: red; }
    .ng-valid.ng-touched { border-color: green; }
  `]
})
export class EnrollmentFormComponent {
  submitted = false;
  onSubmit(form: NgForm) {
    console.log(form.value, form.valid);
    if(form.valid) this.submitted = true;
  }
}