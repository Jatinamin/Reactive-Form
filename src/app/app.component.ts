import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator,Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'reactiveForm';

  reactiveForm= new FormGroup({
    fName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    lName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    city:new FormControl(''),
    state:new FormControl('')
  })

  submitForm(reactiveForm:FormGroup){
    console.log(reactiveForm.value)

  }
  
}
