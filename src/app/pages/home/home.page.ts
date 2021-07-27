import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';
import { Observable } from 'rxjs';
//import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private api: String = "http://localhost:3000/api";
  public places$: Observable<any>;

  private params = new HttpParams();
  map: Map;
  private position: any = {
    lat: 13.481728,
    lng: -88.177993
  }
  public positionArray: Number[] = [this.position.lng, this.position.lat];
  //@ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  //public mapOptions: google.maps.MapOptions = {
  //  center: {
  //    lat: 13.481728,
  //    lng: -88.177993
  //  },
  //  zoom: 16,
  //  disableDefaultUI: true,
  //  fullscreenControl: false,
  //  mapTypeId: "roadmap",
  //  maxZoom: 18.5,
  //  minZoom: 12,
  //  clickableIcons: false
  //}
  //public markerOptions: google.maps.MarkerOptions = {
  //  position: {
  //    lat: 13.481728,
  //    lng: -88.177993
  //  },
  //  //label: {
  //  //  color: '#fff',
  //  //  text: 'Estoy aquí',
  //  //},
  //  title: 'Estoy aquí',
  //  icon: {
  //    url: '../../assets/starvation.svg',
  //    scaledSize: new google.maps.Size(45, 45),
  //
  //  }
  //}

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    //this.params.set('coordinates', '"$key"')
    //this.params.set('limitToFirst', "1");
    //this.places$ = this.http.get(`${this.api}/places`, {
    //  "coordinates": {
    //    "lat": 13.484139,
    //    "lng": -88.191460
    //  },
    //  "distance": 400
    //});
    //this.places$.subscribe((data) => {
    //  console.log("map");
    //  console.log(data);
    //});

  }

  public reverse = (coordinates: Number[]) => coordinates.reverse();

  //public openInfoWindow = (marker: MapMarker): void => {
  //  this.infoWindow.open(marker);
  //}

}
