import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  constructor(private faceSnapService: FaceSnapsService) {}
  snaped!: boolean;
  buttonContent!: string;

  ngOnInit(): void {
    this.snaped = false;
    this.buttonContent = "Oh snap"
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
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id)
    this.buttonContent = "Oups Unsnap"
  }

  unSnap(): void {
    this.snaped = false;
    this.faceSnap.removeSnap();
    this.buttonContent = "Oh snap"
  }
}
