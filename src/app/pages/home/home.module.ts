import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MainHeaderComponent } from '../../shareds/components/main-header/main-header.component';
import { MainFooterComponent } from '../../shareds/components/main-footer/main-footer.component';
import { SharedComponentsModule } from '../../shareds/modules/shared-components/shared-components.module';
//import { GoogleMapsModule } from '@angular/google-maps';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedComponentsModule,
    HttpClientModule,
    //GoogleMapsModule 
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapBoxApiKey
    })
  ],
  declarations: [
    HomePage,
    MainHeaderComponent,
    MainFooterComponent
  ]
})
export class HomePageModule { }
