import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../model/face-snap.model";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  constructor(title: string, description: string, createdDate: Date, snaps: number, imageUrl: string, buttonText: string) {
    this.title = title;
    this.description = description;
    this.snaps = snaps;
    this.buttonText = buttonText;
    this.createdDate = createdDate;
    this.imageUrl = imageUrl
  }

  ngOnInit(): void {
    this.title = 'Agent';
    this.description = "C'est un agent correct";
    this.createdDate = new Date();
    this.snaps = 7;

    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';

    this.buttonText = 'Oh Snap!';
  }

  onAddSnap() {
    this.snaps++;
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
