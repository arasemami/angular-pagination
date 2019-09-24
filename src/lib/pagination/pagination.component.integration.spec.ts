import { PaginationComponent } from './pagination.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaginationComponent
      ],
      imports: [

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create pagination `5 pages and start as 2`', () => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.startPage = 2;
    component.total = 200;
    component.limit = 5;
    component.loading = false;
    component.pagesToShow = 5;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});




// describe('ButtonComponent', () => {
//
//   it('should button Name is `save`', () => {
//     fixture = TestBed.createComponent(ButtonComponent);
//     component = fixture.componentInstance;
//     component.name = 'save';
//     fixture.detectChanges();
//     expect(fixture.debugElement.nativeElement.querySelector('button').getAttribute('name')).toBe('save');
//   });

//   it('should button Id is `cancel`', () => {
//     fixture = TestBed.createComponent(ButtonComponent);
//     component = fixture.componentInstance;
//     component.id = 'cancel';
//     fixture.detectChanges();
//     expect(fixture.debugElement.nativeElement.querySelector('button').getAttribute('id')).toBe('cancel');

//   });

//   it('should disable button when disible property is `true`', () => {
//     fixture = TestBed.createComponent(ButtonComponent);
//     component = fixture.componentInstance;
//     component.disabled = true;
//     component.value = 'Edit item';
//     component.src = 'https://image.flaticon.com/icons/svg/263/263096.svg';
//     fixture.detectChanges();
//     expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBe(true);
//   });

//   it('should loading button when loading property is `true`', () => {
//     fixture = TestBed.createComponent(ButtonComponent);
//     component = fixture.componentInstance;
//     component.name = 'host';
//     component.id = 'host';
//     component.src = 'https://image.flaticon.com/icons/svg/263/263096.svg';
//     component.value = 'host';
//     component.bgColor = '#039BED';
//     component.color = '#333333';
//     component.loading = true;
//     component.width = '200px';
//     component.borderRadius = '5px';
//     fixture.detectChanges();
//     const style = document.defaultView.getComputedStyle(fixture.debugElement.nativeElement.querySelector('.loader-button'));
//     expect(style.getPropertyValue('display')).toBe('flex');
//   });

// });
