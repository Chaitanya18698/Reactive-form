import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, PatternValidator} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  generalForm: FormGroup;
  constructor( ) { }
  ngOnInit(){
    this.generalForm = new FormGroup ({
      fullname:new FormControl('',[Validators.required]),
      DOB:new FormControl('', [Validators.required,]),
      number: new FormControl('',[Validators.required, Validators.pattern('[0-9]{10}')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      terms:new FormControl('',[Validators.requiredTrue,])
    })
  }
  onSubmit(generalForm:FormGroup):void{
    alert('Congrats you won a day-off');
  }
  
}
