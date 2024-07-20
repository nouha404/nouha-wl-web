import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordlistFormComponent } from './wordlist.form.component';

describe('WordlistFormComponent', () => {
  let component: WordlistFormComponent;
  let fixture: ComponentFixture<WordlistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordlistFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordlistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
