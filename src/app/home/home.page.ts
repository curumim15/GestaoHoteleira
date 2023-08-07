import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//ScreenOrientation
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  form: FormGroup;
  isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder,private orientacao: ScreenOrientation) { 
    this.isSubmitted = false;
    //ScreenOrientation
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }
  //Validar o codigo funcionario
  ngOnInit() {
    this.form = this.formBuilder.group({
      codigo: ['', [Validators.required, Validators.pattern('12345')]],
   });
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.form.valid) {
      return false;
    } else {
    }
  }
  
  get formControls() { 
    return this.form.controls;
  }

}
