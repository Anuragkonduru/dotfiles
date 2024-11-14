import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { List } from '../ListModel';
@Component({
  selector: 'app-template',
  standalone: true,
  imports: [],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  lists: List[] = [];
  constructor() {}
  ngOnInit(): void {}
  submit(form: NgForm) {
    console.log(f.value);
    this.lists.push(form.value);
  }
}
