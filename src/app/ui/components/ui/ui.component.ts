import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  public open: boolean;
  constructor() {
    this.open = true;
  }

  ngOnInit(): void {}

  public toggle() {
    this.open = !this.open;
    console.log(this.open);
  }
}
