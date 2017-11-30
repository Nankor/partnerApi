import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {RestapiService} from '../../services/restapi.service';
import {Item} from '../../models/item';

@Component({
  selector: 'app-promo-detail',
  templateUrl: '../detail.component.html'
})
export class PromoDetailComponent implements OnInit {
  detailTitle = 'Promo Detail';
  item: Item;
  objKeys: string[];

  constructor(private restapiService: RestapiService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.restapiService.getPromo(+params.get('id')))
      .subscribe(item => {
        this.item = item;
        this.objKeys = Object.keys(item);
      });
  }
}
