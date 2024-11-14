import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [TemplateComponent, ReactiveComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {}
