import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() {}
  ngOnChanges() {
    console.log(this.appState);
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}
