import { Component, Output, EventEmitter } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'versionvalidatedinput',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  valid = true;
  @Output() submission = new EventEmitter<string>();

  submit(){
    const submittedValue = this.version.value;
    this.valid = submittedValue.match(/^\d\.\d\.\d$/);
    if (this.valid) {
      this.version.setValue('');
      this.submission.emit(submittedValue);
    }
  }

  version = new FormControl('', [Validators.required, Validators.pattern(/\d\.\d\.\d/)])
}
