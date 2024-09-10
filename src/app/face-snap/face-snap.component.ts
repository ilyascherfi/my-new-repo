import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snaped!: boolean;
  buttonContent!: string;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon Meilleur ami depui toujours! ';
    this.createdAt = new Date();
    this.snaps = 5;
    this.snaped = false;
    this.buttonContent = "Oh snap"
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
  }

  onAddSnaps(): void {
    if(!this.snaped) {
      this.snaped = true;
      this.snaps += 1;
      this.buttonContent = "Oups Unsnap"
    }else {
      this.snaped = false;
      this.snaps -= 1;
      this.buttonContent = "Oh snap"
    }

  }
}
