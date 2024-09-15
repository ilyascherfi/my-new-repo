import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  private facesnaps: FaceSnap[] = [
    new FaceSnap(
      "Archibald",
      "Mon meilleur ami depuis toujours!",
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      new Date(),
      239
    ),
    new FaceSnap(
      "John Sourdough",
      "Born and raised by jin jocks!",
      "https://images.unsplash.com/photo-1682786308235-d3e74451a32c?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      new Date(),
      8
    ).withLocation('à la montagne'),
    new FaceSnap(
      "Une meuf ",
      "Dans une bibliothèque avec une apple watch",
      "https://plus.unsplash.com/premium_photo-1681681061526-5f5496c635e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      new Date(),
      123,
    )
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.facesnaps]
  }
}
