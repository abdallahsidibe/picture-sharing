import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FaceSnapComponent} from "./face-snap/face-snap.component";
import {FaceSnap} from "./model/face-snap.model";
import {NgForOf, registerLocaleData} from "@angular/common";
import {HeaderComponent} from "./header/header.component";
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent, NgForOf, HeaderComponent, FaceSnapListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'snapface';


  ngOnInit(): void {

  }


}
