import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { Art } from 'src/app/_core/services/service.generated';
import { ArtService } from './services/art.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-art-section',
  templateUrl: './art-section.component.html',
  styleUrls: ['./art-section.component.scss']
})
export class ArtSectionComponent implements OnInit {
  public art: Art;
  public arts: Array<Art>;
  public artCategory: Array<string>;

  constructor(
    private service: ArtService,
    private ref: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
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


  openDialog() {
    const dialogRef = this.dialog.open(ArtCreatorDialog, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'art-creator.component',
  templateUrl: 'art-creator.component.html',
})
export class ArtCreatorDialog {

  constructor(
    public dialogRef: MatDialogRef<ArtCreatorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Art) { }


  onCancel(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    this.dialogRef.close();
  }
}




