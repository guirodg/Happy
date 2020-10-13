import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.css']
})
export class PageMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  urlMarker = './assets/Local.svg'
  urlPlusicon = './assets/Plus.svg'

  lat: number = -23.6626565;
  lng: number = -46.4337393;
  zoom: number = 15;
}
