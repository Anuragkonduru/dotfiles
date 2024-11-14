import { Component } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css',
})
export class SubjectsComponent implements OnInIt{
  NameInput = '';
  NameSubject: string[] = [];
  NameBehavioralSubject: string[] = [];
  constructor(private subject: SubjectService) {
    subject.getNameSubject().subscribe((names) => {
      this.NameSubject = names;
    });
    subject.getNameBehavioralSubject().subscribe((names) => {
      this.NameBehavioralSubject = names;
    });
  }
  ngOnInIt
}
