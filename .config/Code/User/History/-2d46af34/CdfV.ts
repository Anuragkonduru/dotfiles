import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

interface List {
  Name: string;
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
  list!: List[];
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.rform=this.formBuilder.group()
  }
  submit() {}
}
