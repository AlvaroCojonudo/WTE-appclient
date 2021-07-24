import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  public mapOptions: google.maps.MapOptions = {
    center: {
      lat: 13.481728,
      lng: -88.177993
    },
    zoom: 16,
    disableDefaultUI: true,
    fullscreenControl: false,
    mapTypeId: "roadmap",
    maxZoom: 18.5,
    minZoom: 12,
    clickableIcons: false
  }

  public markerOptions: google.maps.MarkerOptions = {
    position: {
      lat: 13.481728,
      lng: -88.177993
    },
    //label: {
    //  color: '#fff',
    //  text: 'Estoy aquí',
    //},
    title: 'Estoy aquí',
    icon: {
      url: '../../assets/starvation.svg',
      scaledSize: new google.maps.Size(45, 45),

    }
  }

  constructor() { }

  ngOnInit() { }

  public openInfoWindow = (marker: MapMarker): void => {
    this.infoWindow.open(marker);
  }

}
