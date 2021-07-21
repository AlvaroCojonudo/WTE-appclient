import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-bagde',
  templateUrl: './option-bagde.component.html',
  styleUrls: ['./option-bagde.component.scss'],
})
export class OptionBagdeComponent implements OnInit {
  @Input('tool') tool: any = {
    title: "Filter",
    startIcon: "filter",
    endIcon: "chevron-up"
  };
  constructor() { }

  ngOnInit() {}

}
