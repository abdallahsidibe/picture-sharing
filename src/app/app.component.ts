import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FaceSnapComponent} from "./face-snap/face-snap.component";
import {FaceSnap} from "./model/face-snap.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'snapface';
  myFaceSnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    // lorsqu'on possède une classe
    // this.myFaceSnap = new FaceSnap(
    //   'AZIZ',
    //   "Mon premier commentaire",
    //   'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    //   new Date(),
    //   7
    // );
    this.myFaceSnap = {
      title: 'AZIZ',
      description: "Mon premier commentaire",
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 7,
      location: 'Paris'
    };

    this.myOtherSnap = {
      title: 'ALI',
      description: "Mon premier commentaire",
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 7,
      location: 'Chatillon'
    };

    this.myLastSnap = {
      title: 'ALI',
      description: "Mon premier commentaire",
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 7,
      location: 'Chatillon'
    };

  }
}
