import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndataService } from '../indata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  items;
  cadForm;

  constructor(
    private route: ActivatedRoute,
    private indataService: IndataService,
    private formBuilder: FormBuilder
  ) {
    this.cadForm = this.formBuilder.group({
      nome: this.formBuilder.control('', Validators.required),
      cpf: this.formBuilder.control('', Validators.required),
      tel: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required),
      cep: this.formBuilder.control('', Validators.required),
      logradouro: this.formBuilder.control('', Validators.required),
      numero: this.formBuilder.control('', Validators.required),
      bairro: this.formBuilder.control('', Validators.required),
    }); 
  }

  ngOnInit() {
    
  }

}