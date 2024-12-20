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
  getNameSubjectSubscription: Subscription | undefined;
  getNameBehavioralSubjectSubscription: Subscription | undefined;
  constructor(private subject: SubjectService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.getNameSubjectSubscription = this.subject
      .getNameSubject()
      .subscribe((names) => {
        this.NameSubject = names;
      });
    this.getNameBehavioralSubjectSubscription = this.subject
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
    this.getNameSubjectSubscription.unsubscribe();
    this.getNameBehavioralSubjectSubscription.unsubscribe();
  }
}
