import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {RestapiService} from '../../services/restapi.service';
import {Invoice} from '../../models/invoice';


@Component({
  selector: 'app-promo-sale-detail',
  templateUrl: '../detail.component.html'
})
export class PromoSaleDetailComponent implements OnInit {
  detailTitle = 'Promo Sale Detail';
  item: Invoice;
  objKeys: string[];

  constructor(private restapiService: RestapiService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.route.paramMap
      .switchMap((params: ParamMap) => this.restapiService.getPromoInvoice(+params.get('id')))
      .subscribe(invoice => {
        this.item = invoice as Invoice;
        this.objKeys = Object.keys(invoice);
      });
  }
}
