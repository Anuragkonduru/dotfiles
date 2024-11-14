import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { List } from '../ListModel';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent implements OnInit {
  rform!: FormGroup;
  lists: List[] = [];
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.rform = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Age: ['', [Validators.required, Validators.min(1)]],
    });
  }
  submit() {
    console.log(this.rform.errors);
    if (this.rform.valid) {
      console.log(this.rform.value.Name);
      this.lists.push(this.rform.value);
      this.rform.reset();
    }
  }
}
