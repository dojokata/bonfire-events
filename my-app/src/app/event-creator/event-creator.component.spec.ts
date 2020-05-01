import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventCreatorComponent } from './event-creator.component';

describe('EventCreatorComponent', () => {
  let component: EventCreatorComponent;
  let fixture: ComponentFixture<EventCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('has a title input', ()=> {
    let titleInput;
    const maxLength = '60';
    beforeEach( () => {
      titleInput = fixture.debugElement.query(By.css('input[name=title]'));
    });

    it('exists', () => {
      expect(titleInput).toBeTruthy();
    });

    it('limited to 60', () => {
      expect(titleInput.nativeElement.getAttribute("maxlength")).toBe(maxLength);
    });

  });

});
