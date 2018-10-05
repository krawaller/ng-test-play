import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'versionvalidatedinput',
  template: ''
})
class FakeThingy {
  @Output() submission = new EventEmitter();
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, FakeThingy
      ],
    }).compileComponents();

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'foo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('foo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to foo!');
  });

  it('should show submitted versions', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const child: FakeThingy = fixture.debugElement.query(By.css('versionvalidatedinput')).componentInstance;

    const fakeVersion = "1.2.3";
    child.submission.emit(fakeVersion);

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('.qa-version').innerHTML).toContain(fakeVersion);
  });
});
