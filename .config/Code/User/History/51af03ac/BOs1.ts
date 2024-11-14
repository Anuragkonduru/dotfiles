import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { List } from '../ListModel';
@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
