import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MainHeaderComponent } from '../../shareds/components/main-header/main-header.component';
import { MainFooterComponent } from '../../shareds/components/main-footer/main-footer.component';
import { SharedComponentsModule } from '../../shareds/modules/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    HomePage,
    MainHeaderComponent,
    MainFooterComponent
  ]
})
export class HomePageModule { }
