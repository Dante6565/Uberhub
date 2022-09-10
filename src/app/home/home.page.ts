import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HomeService } from './home.service';
import Swal from 'sweetalert2'
import { MenuController } from '@ionic/angular';
declare var google;

/*interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}*/

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  cliente: string
  conductor = []
  Titulo = "Auto Disponibles"
  
  /*map = null;

  markers: Marker[] = [
    {
      position: {
        lat: -33.444639152589524,
        lng: -70.67309672306408,
      },
      title: 'Parque Simón Bolivar'
    },
    {
      position: {
        lat: -33.444639152589524,
        lng: -70.67309672306408,
      },
      title: 'Jardín Botánico'
    },
    {
      position: {
        lat: -33.444639152589524,
        lng: -70.67309672306408,
      },
      title: 'Parque la 93'
    },
    {
      position: {
        lat: -33.444639152589524,
        lng: -70.67309672306408,
      },
      title: 'Maloka'
    },
  ];*/

  constructor(private servicio: HomeService,
              private router: Router,
              private menu: MenuController,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
      //this.loadMap();
      this.conductor = this.servicio.obtenerHomes()
      this.cliente = this.activatedRoute.snapshot.paramMap.get("user")
  }

  ionViewWillEnter() {
    this.conductor = this.servicio.obtenerHomes()
  }

  agregar() {
    console.log("add")
    this.router.navigate(['/agregar'])
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  /*<ion-button (click)="clHistorial()">historial</ion-button>   Otro diseño de boton por si lo piden que es con el click en vez de usar routerLink que es con html, tenemos este otro metodo
  clHistorial() {
    this.router.navigate(['/historial'])
  }*/


  /*loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -33.444639152589524, lng: -70.67309672306408};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }*/

}
