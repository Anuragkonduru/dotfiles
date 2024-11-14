import { Component } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css',
})
export class SubjectsComponent {
  NameInput = '';
  NameSubject: string[] = [];
  NameBehavioralSubject: string[] = [];
  constructor(private subject: SubjectService) {}
}
