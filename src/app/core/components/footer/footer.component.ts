import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public v!: number;
  constructor(private versionService: VersionService) {
    this.versionService.numVersion.subscribe((number) => (this.v = number));
  }

  ngOnInit(): void {}
}
