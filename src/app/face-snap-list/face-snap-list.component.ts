import {Component, OnInit} from '@angular/core';
import {FaceSnapComponent} from "../face-snap/face-snap.component";
import {NgForOf} from "@angular/common";
import {FaceSnap} from "../model/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent,
    NgForOf
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnap!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.faceSnap = this.faceSnapsService.getAllFaceSnaps();

  }

}
