import {Component} from '@angular/core';

import {TableInf} from '../../models/table-inf';
import {RestapiService} from '../../services/restapi.service';

@Component({
  selector: 'app-promo-sales',
  template: '<app-table [tableInf]="tableInf"></app-table>',
  styleUrls: []
})
export class PromoSalesComponent {

  tableInf: TableInf = {
    listTitle: 'Promo Sales List',
    searchPName: 'email',
    routeName: 'promo_sales',
    getItemsFunc: this.invoiceService.getPromoInvoicesPage.bind(this.invoiceService),
    addCreateButton: false
  };

  constructor(private invoiceService: RestapiService) {
  }

}
