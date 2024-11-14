import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css',
})
export class SubjectsComponent implements OnInit, OnDestroy {
  NameInput = '';
  NameSubject: string[] = [];
  NameBehavioralSubject: string[] = [];
  getNameSubjectSubscription: Subscription;
  getNameBehavioralSubjectSubscription: Subscription;
  constructor(private subject: SubjectService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    const getNameSubjectSubscription = this.subject
      .getNameSubject()
      .subscribe((names) => {
        this.NameSubject = names;
      });
    const getNameBehavioralSubjectSubscription = this.subject
      .getNameBehavioralSubject()
      .subscribe((names) => {
        this.NameBehavioralSubject = names;
      });
  }
  addName() {
    this.subject.addName(this.NameInput);
  }
  removeName() {
    this.subject.popName();
  }
  OnDestroy() {
    this.getNameSubjectSubscription.unsucscribe();
  }
}
