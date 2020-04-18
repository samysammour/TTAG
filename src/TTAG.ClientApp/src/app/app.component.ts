import { Component, OnInit, Inject } from '@angular/core';
import { ArtistClient, Artist } from './_core/services/service.generated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'TTAG';
  public baseUrl: string;
  public artists: Artist[];

  constructor(private artistClient: ArtistClient) {
  }

  ngOnInit(): void {
    this.artistClient.getAll().subscribe((result: Artist[]) => {
      this.artists = result;
    });
  }
}
