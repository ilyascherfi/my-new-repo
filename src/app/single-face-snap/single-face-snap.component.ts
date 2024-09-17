import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snaped!: boolean;
  buttonContent!: string;
  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.snaped = false;
    this.buttonContent = "Oh snap"
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId)
  }

  onAddSnaps(): void {
    if(!this.snaped) {
      this.snap();
    }else {
      this.unSnap();
    }
  }

  snap(): void {
    this.snaped = true;
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "snap")
    this.buttonContent = "Oups Unsnap"
  }

  unSnap(): void {
    this.snaped = false;
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, "unsnap");
    this.buttonContent = "Oh snap"
  }
}
