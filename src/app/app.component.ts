import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'crm';
  public sub!: Subscription;
  private obs = new Observable((listXsubscribe) => {
    listXsubscribe.next(Math.random());
  });
  private subj = new Subject();
  private behave = new BehaviorSubject(0);
  constructor() {
    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
    // this.subj.next('test');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('test');
    // this.subj.next('test2');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('test3');
    // this.subj.next(Math.random());
    this.sub = this.behave.subscribe((data) => console.log(data));
    // this.behave.next(1);
    // this.behave.subscribe((data) => console.log(data));
    // this.behave.next(2);
    // this.behave.next(Math.random());
    // this.behave.subscribe((data) => console.log(data));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
