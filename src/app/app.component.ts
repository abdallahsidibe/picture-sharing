import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FaceSnapComponent} from "./face-snap/face-snap.component";
import {FaceSnap} from "./model/face-snap.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'snapface';
  myFaceSnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  faceSnap!: FaceSnap[];

  ngOnInit(): void {

    this.faceSnap = [
      {
        title: 'AZIZ',
        description: "Mon premier commentaire",
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 700,
        location: 'Paris'
      },
      {
        title: 'ALI',
        description: "Mon premier commentaire",
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 7,
        location: 'Chatillon'
      },
      {
        title: 'ALI',
        description: "Mon premier commentaire",
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 300,
        location: 'Chatillon'
      }
    ]

  }
}
