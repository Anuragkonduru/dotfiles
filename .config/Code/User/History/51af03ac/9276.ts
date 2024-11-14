import { Component } from '@angular/core';
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
  ngOnInit(): void {
  }
  submit(f:ngForm) {
    console.log(this.rform.errors);
    
  }
}
