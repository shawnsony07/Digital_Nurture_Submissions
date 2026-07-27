import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
import { By } from '@angular/platform-browser';
import { SimpleChanges, SimpleChange } from '@angular/core';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input course name', () => {
    component.course = { id:1, name:'Data Structures', code:'CS101', credits:4, gradeStatus:'passed' };
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(el.textContent).toContain('Data Structures');
  });

  it('should emit on enroll', () => {
    component.course = { id:1, name:'Data Structures', code:'CS101', credits:4, gradeStatus:'passed' };
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');
    fixture.debugElement.query(By.css('button')).nativeElement.click();
    fixture.detectChanges();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });
  
  it('should call ngOnChanges', () => {
    spyOn(console, 'log');
    component.ngOnChanges({ course: new SimpleChange(null, component.course, true) } as SimpleChanges);
    expect(console.log).toHaveBeenCalled();
  });
});