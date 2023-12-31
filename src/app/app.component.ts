import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public form = this._fb.group({
    firstName: '',
    lastName: '',
    age: 18,
    subscribe: true,
  });

  public formUpdates$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    map((formValues) => {
      return { ...formValues, valid: this.form.valid };
    })
  );

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.form.value);
  }

  submit() {
    console.log(this.form.value);
  }
}
