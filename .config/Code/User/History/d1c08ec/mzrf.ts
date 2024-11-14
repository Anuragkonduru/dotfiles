import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css',
})
export class SubjectsComponent implements OnInit {
  NameInput = '';
  NameSubject: string[] = [];
  NameBehavioralSubject: string[] = [];
  constructor(private subject: SubjectService) {}
  ngOnInit() {
    this.subject.getNameSubject().subscribe((names) => {
      this.NameSubject = names;
    });
    this.subject.getNameBehavioralSubject().subscribe((names) => {
      this.NameBehavioralSubject = names;
    });
  }
  
}
