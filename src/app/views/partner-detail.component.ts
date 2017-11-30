import {Component, OnInit} from '@angular/core';

import {RestapiService} from '../services/restapi.service';
import {Item} from '../models/item';

@Component({
  selector: 'app-partner-detail',
  templateUrl: 'detail.component.html'
})
export class PartnerDetailComponent implements OnInit {
  detailTitle = 'Partner Info';
  item: Item;
  objKeys: string[];

  constructor(private restapiService: RestapiService) {
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.restapiService.getTheItem('info')
      .subscribe(partnerInf => {
        this.item = partnerInf;
        this.objKeys = Object.keys(partnerInf);
      });
  }
}
