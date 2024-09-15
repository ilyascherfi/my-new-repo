import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, PercentPipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, PercentPipe, CurrencyPipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snaped!: boolean;
  buttonContent!: string;
  myCurrency: number = 336.75

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
    this.faceSnap.addSnap();
    this.buttonContent = "Oups Unsnap"
  }

  unSnap(): void {
    this.snaped = false;
    this.faceSnap.removeSnap();
    this.buttonContent = "Oh snap"
  }
}
