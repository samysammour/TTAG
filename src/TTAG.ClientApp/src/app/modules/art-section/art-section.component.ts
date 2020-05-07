import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Art } from 'src/app/_core/services/service.generated';
import { ArtService } from './services/art.service';

@Component({
  selector: 'app-art-section',
  templateUrl: './art-section.component.html',
  styleUrls: ['./art-section.component.scss']
})
export class ArtSectionComponent implements OnInit {
  public art: Art;
  public arts: Array<Art>;

  constructor(private service: ArtService, private ref: ChangeDetectorRef) {
    this.art = new Art();
    this.arts = new Array<Art>();
  }

  ngOnInit(): void {
    this.getArts();
  }

  public onAddClicked() {
    this.service.add(this.art).subscribe(result => {
      this.getArts();
    });
  }

  private getArts() {
    this.service.getAll().subscribe(result => {
      this.arts = result;
      this.ref.markForCheck();
    });
  }
}
