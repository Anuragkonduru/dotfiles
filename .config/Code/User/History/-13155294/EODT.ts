import { Component } from '@angular/core';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [TemplateComponent, ReactiveComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {}
