import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon Meilleur ami depui toujours! ';
    this.createdAt = new Date();
    this.snaps = 0;
  }
}
