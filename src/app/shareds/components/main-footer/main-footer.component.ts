import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
})
export class MainFooterComponent implements OnInit {

  public tools: any = [
    {
      title: "filtros",
      startIcon: "filter",
      endIcon: "chevron-up"
    },
    {
      title: "1 km",
      startIcon: null,
      endIcon: "radio"
    }
  ]

  constructor() { }

  ngOnInit() { }



}
