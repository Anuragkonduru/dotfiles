import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface List {
  Name: string;
  EMail: string;
  Age: number;
}

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent implements OnInit {
  rform!: FormGroup;
  lists!: List[];
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.rform = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required,Validators.email],
      Age: ['', Validators.required, Validators.min(1)],
    });
  }
  submit() {
    if (this.rform.valid) {
      
    }
  }
}
