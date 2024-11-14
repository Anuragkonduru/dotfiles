import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { List } from '../ListModel';
@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  lists: List[] = [];
  constructor() {}
  ngOnInit(): void {}
  submit(formReference: NgForm) {
    console.log(formReference.value);
    this.lists.push(formReference.value);
  }
}
