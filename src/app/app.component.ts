import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      "Archibald",
      "Mon meilleur ami depuis toujours!",
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      new Date(),
      10
    );
    this.myOtherSnap = new FaceSnap(
      "John Sourdough",
      "Born and raised by jin jocks!",
      "https://images.unsplash.com/photo-1682786308235-d3e74451a32c?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      new Date(),
      8
    );
    this.myLastSnap = new FaceSnap(
      "Une meuf ",
      "Dans une bibliothèque avec une apple watch",
      "https://plus.unsplash.com/premium_photo-1681681061526-5f5496c635e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      new Date(),
      123,
    );

    this.myOtherSnap.setLocation("Phto à la montagne")
  }
}
