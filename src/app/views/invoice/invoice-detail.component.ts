import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Invoice} from '../../models/invoice';
import {RestapiService} from '../../services/restapi.service';


@Component({
  selector: 'app-invoice-detail',
  templateUrl: '../detail.component.html'
})
export class InvoiceDetailComponent implements OnInit {
  detailTitle = 'Invoice Detail';
  item: Invoice;
  objKeys: string[];

  constructor(private invoiceService: RestapiService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.route.paramMap
      .switchMap((params: ParamMap) => this.invoiceService.getInvoice(+params.get('id')))
      .subscribe(invoice => {
        this.item = invoice as Invoice;
        this.objKeys = Object.keys(invoice);
      });
  }

}
